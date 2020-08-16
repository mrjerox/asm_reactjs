import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Admin_layout from '../../../pages/admin_layout';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { storage } from '../../../firebase'

const Add_category = ({ categories }) => {
	const { id } = useParams();
	const singleCate = categories.find(element => element.id == id);
	const [ imgUrl, setImgUrl] = useState(singleCate.image);
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = async(newData) => {
		const response = await axios.put('http://localhost:3001/categories/'+id, {
			id: id,
			name: newData.name,
			image: imgUrl
		});
		window.location = "/admin/categories";
	}

	const onUploadImg = (event) => {
		const img = event.target.files[0];
		const upload = storage.ref(`images/${img.name}`).put(img);
		upload.on('state_changed', () => {

		}, (error) => {
			console.log(error);
		}, () => {
			storage.ref('images').child(img.name).getDownloadURL().then(url => {
				document.querySelector('#img').src = url;
				setImgUrl(url);
			})
		});

	}

	const section = <>
						<form id="addForm" onSubmit={handleSubmit(onSubmit)}>
					        <div className="row">
					        	<div className="col-6">
					        		<div className="form-group m-2">
							          <label>Name</label>
							          <input type="text" className="form-control" name="name" defaultValue={singleCate.name} ref={register({ required: true, minLength: 5})} />
							          {errors.name && errors.name.type === "required" && <label className="text-danger">Ban chua nhap gia tri</label>}
							          {errors.name && errors.name.type === "minLength" && <label className="text-danger">It nhat co 5 ky tu</label>}
							        </div>
							        <div className="form-group m-2">
							          <label>Image</label>
							          <input type="file" className="form-control" name="image" ref={register()} onChange={onUploadImg} />
							          {errors.image && errors.image.type === "required" && <label className="text-danger">Ban chua nhap gia tri</label>}
							        </div>
					        	</div>
					        	<div className="col-6">
							        <img id="img" src={singleCate.image} />
					        	</div>
						        <div className="form-group col-12 ml-2">
						        	<button type="submit" className="btn btn-primary mx-1">Submit</button>
									<Link to="/admin/categories">
						        		<button type="button" className="btn btn-danger">Cancel</button>
									</Link>
						        </div>
					        </div>
					        <div>

					        </div>
					    </form>
					</>
	return (
		<div>
			<Admin_layout section={section} />
		</div>
	)
}

export default Add_category