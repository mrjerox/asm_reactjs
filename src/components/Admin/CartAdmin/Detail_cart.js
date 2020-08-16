import React, { useEffect } from 'react'
import Admin_layout from '../../../pages/admin_layout'
import { useParams, Link } from 'react-router-dom'

const Detail_cart = ({ cartAdmin }) => {
	const { id } = useParams();
	const singleCart = cartAdmin.find(element => element.id == id);

	useEffect(() => {
		const option = document.getElementsByTagName('option');
		for (var i = 0; i < option.length; i++) {
			if(option[i].value == singleCart.status){
				option[i].selected = "selected";
			}
		}
	}, [])
	const section = <>
						<form>
					        <div className="row">
					        	<div className="col-6">
					        		<div className="form-group m-2">
							          <label>ID</label>
							          <input type="text" className="form-control" value={singleCart.id} />
							        </div>
					        		<div className="form-group m-2">
							          <label>First Name</label>
							          <input type="text" className="form-control" value={singleCart.fname} />
							        </div>
							        <div className="form-group m-2">
							          <label>Last Name</label>
							          <input type="text" className="form-control" value={singleCart.lname}/>
							        </div>
							        <div className="form-group m-2">
							          <label>Address</label>
							          <input type="text" className="form-control" value={singleCart.address}/>
							        </div>
							        <div className="form-group m-2">
							          <label>Email</label>
							          <input type="text" className="form-control" value={singleCart.email}/>
							        </div>
							        <div className="form-group m-2">
							          <label>Status</label>
							          <select className="form-control">
							          	<option value="1">Active</option>
							          	<option value="2">Not Active</option>
							          </select>
							        </div>
					        	</div>
					        	<div className="col-6">
									{singleCart.products.map((pro, index) => {
										return(
											<div key={index} className="border border-dark my-3">
												<div className="form-group m-2">
										          <label>Name: {pro.name}</label>
										        </div>
										        <div className="form-group m-2">
										          <label>Count: {pro.count}</label>
										        </div>
										        <div className="form-group m-2">
										          <label>Image</label>
										          <img src={pro.image.original} width="100" className="mx-2"/>
										        </div>
											</div>
										)
									})}
									<div className="form-group">
										<label>Total</label>
										<input type="text" value={singleCart.total} className="form-control"/>
									</div>									
					        	</div>
						        <div className="form-group col-12 ml-2">
						        	<button type="submit" className="btn btn-primary mx-1">Submit</button>
									<Link to="#">
						        		<button type="button" className="btn btn-danger">Cancel</button>
									</Link>
						        </div>
					        </div>
					    </form>
					</>
	return (
		<>
			<Admin_layout section={section} />
		</>
	)
}

export default Detail_cart