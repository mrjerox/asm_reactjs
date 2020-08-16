import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Admin_layout from '../../../pages/admin_layout';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { storage } from '../../../firebase'

const Add_product = ({ data, categories }) => {
	
	const arrImg = [];
	const [ imgUrl, setImgUrl] = useState([]);
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = async(newData) => {
		const response = await axios.post('http://localhost:3001/products', {
			name: newData.name,
			cateId: newData.cateId,
			gallery: imgUrl,
			price: newData.price,
			desc: newData.desc
		});
		window.location = "/admin/products";
	}

	const onUploadImg = (event) => {
		const imgs = event.target.files;
		for( let img of imgs ){
			const upload = storage.ref(`images/${img.name}`).put(img);
			upload.on('state_changed', () => {

			}, (error) => {
				console.log(error);
			}, () => {
				storage.ref('images').child(img.name).getDownloadURL().then(url => {
					arrImg.push(url);
					console.log(url);
				})
			});
		}
	}

	const clickUpload = () => {
		setImgUrl(arrImg);
	}

	const section = <>
						<form id="addForm" onSubmit={handleSubmit(onSubmit)}>
					        <div className="row">
					        	<div className="col-6">
					        		<div className="form-group m-2">
							          <label>Name</label>
							          <input type="text" className="form-control" name="name" ref={register({ required: true, minLength: 5})} />
							          {errors.name && errors.name.type === "required" && <label className="text-danger">Ban chua nhap gia tri</label>}
							          {errors.name && errors.name.type === "minLength" && <label className="text-danger">It nhat co 5 ky tu</label>}
							        </div>
							        <div className="form-group m-2">
							        	<label>Categories</label>
							        	<select name="cateId" className="form-control" ref={register()}>
							        		{categories.map((cate, index) => 
							        			<option key={index} value={cate.id}>{cate.name}</option>
							        		)}
							        	</select>
							        </div>
							        <div className="form-group m-2">
							          <label>Image</label>
							          <input type="file" className="form-control" name="image" ref={register({ required: true})} multiple onChange={onUploadImg} />
							          {errors.image && errors.image.type === "required" && <label className="text-danger">Ban chua nhap gia tri</label>}
							          <button type="button" onClick={clickUpload}>Upload</button>
							        </div>
					        	</div>
						        <div className="col-6">
						        	<div className="form-group m-2">
							          <label>Price</label>
							          <input type="number" className="form-control" name="price" ref={register({ required: true, min: 1})} />
							          {errors.price && errors.price.type === "required" && <label className="text-danger">Chua nhap gia</label>}
							          {errors.price && errors.price.type === "min" && <label className="text-danger">Gia nho nhat bang 1</label>}
							        </div>
							        <div className="form-group m-2">
							          <label>Desc</label>
							          <input type="text" className="form-control" name="desc" ref={register} />
							        </div>
						        </div>
						        {imgUrl.map((img, index) => {
						        	return(
						        		<img src={img} key={index} />
						        	)
						        })}
						        <div className="form-group col-12 ml-2">
						        	<button type="submit" className="btn btn-primary">Submit</button>
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

export default Add_product