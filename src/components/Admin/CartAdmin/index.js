import React, { useEffect, useState } from 'react'
import Admin_layout from '../../../pages/admin_layout'
import { Link } from 'react-router-dom'

const CardAdmin = ({ cartAdmin }) => {
	useEffect(() => {
		const getStatus = document.getElementsByTagName('td');
		for (var i = 0; i < getStatus.length; i++) { 
			if (getStatus[i].innerHTML === "1") {
				getStatus[i].innerHTML = "Active";
			} else if(getStatus[i].innerHTML === "2") {
				getStatus[i].innerHTML = "Not Active";
			}
		}
	}, [])
	
	const section = <>
						<table className="table">
							  <thead>
							    <tr>
							      <th scope="col">ID</th>
							      <th scope="col">Status</th>
							      <th scope="col">Detail</th>
							    </tr>
							  </thead>
							  <tbody>
							    {cartAdmin.map((single, index) => {
							    	return(
							    		<tr key={index}>
									      <th scope="row">{single.id}</th>
									      <td>{single.status}</td>
									      <td>
									      	<Link to={'/admin/cart/' + single.id}>
									      		<button type="button" className="btn btn-primary">Detail</button>
									      	</Link>
									      </td>
									    </tr>
							    	)
							    })}
							  </tbody>
						   </table>
					</>
	return (
		<>
			<Admin_layout section={section} />
		</>
	)
}

export default CardAdmin