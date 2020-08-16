import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Admin_layout from '../../../pages/admin_layout';

const Products = ({ data, onRemove, categories }) => {
	const getCategories = JSON.parse(localStorage.getItem('categories'));
	if(categories.length == 0){
		categories = getCategories;
	}
	const onHandleClick = async(id) => {
		try {
			await axios.delete('http://localhost:3001/products/'+id);
			onRemove(id);
        } catch (error) {
			console.error(error);
        }
	}

	const section = <>
						  <table className="table">
							  <thead>
							    <tr>
							      <th scope="col">ID</th>
							      <th scope="col">Category</th>
							      <th scope="col">Name</th>
							      <th scope="col">Image</th>
							      <th scope="col">Price</th>
							      <th scope="col">Details</th>
							      <th scope="col">Delete/Edit</th>
							    </tr>
							  </thead>
							  <tbody>
							    {data.map((product, index) => {
								    const getName = categories.find(element => element.id == product.cateId);
								    	return(
								    		<tr key={index}>
										      <th scope="row">{product.id}</th>
										      <td>{getName.name}</td>
										      <td>{product.name}</td>
										      <td><img src={product.gallery[0]} width='100' /></td>
										      <td>{product.price}</td>
										      <td>
												<Link to={`/admin/product/` + product.id}>
													<p>Detail</p>
												</Link>
										      </td>
										      <td>
										      	<button className="btn btn-danger mr-1" onClick={() => {const result = (window.confirm("delete")) ? onHandleClick(product.id) : false}}>Delete</button>
												<Link to={'/admin/edit-product/' + product.id}>
										      		<button className="btn btn-primary">Edit</button>
												</Link>
										      </td>
										    </tr>
								    	)
								    } 

							    )}
							  </tbody>
						   </table>
					</>
	return (
		<div>
			<Admin_layout section={section} />
		</div>
	)
}

export default Products
