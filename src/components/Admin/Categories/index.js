import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../pages/admin_layout'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Categories = ({ categories, data, onRemoveCategory }) => {
	const { id } = useParams();
	const amount = [];

	const onHandleClick = async(id) => {
		try {
			await axios.delete('http://localhost:3001/categories/'+id);
			onRemoveCategory(id);
        } catch (error) {
			console.error(error);
        }
	}
	const getAmountProduct = (id) => {
		amount.splice(0, amount.length);
		const singleProduct = data.filter(element => element.cateId == id);
		amount.push(...singleProduct);
	}
	
	const section = <>
						<table className="table">
							  <thead>
							    <tr>
							      <th scope="col">ID</th>
							      <th scope="col">Name</th>
							      <th scope="col">Image</th>
							      <th scope="col">Amount</th>
							      <th scope="col">Delete/Edit</th>
							    </tr>
							  </thead>
							  <tbody>
							    {categories.map((category, index) => 
							    	<tr key={index}>
								      <th scope="row">{category.id}</th>
								      <td>{category.name}</td>
								      <td><img src={category.image} width="100" /></td>
								      <td>{getAmountProduct(category.id)}{amount.length}</td>
								      <td>
								      	<button className="btn btn-danger mr-1" onClick={() => {const result = (window.confirm("delete")) ? onHandleClick(category.id) : false}}>Delete</button>
										<Link to={'/admin/edit-category/' + category.id}>
								      		<button className="btn btn-primary">Edit</button>
										</Link>
								      </td>
								    </tr>	
							    )}
							  </tbody>
						   </table>
					</>
	return (
		<>
			<Layout section={section} />
		</>
	)
}

export default Categories