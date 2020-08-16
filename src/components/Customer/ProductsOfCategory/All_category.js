import React from 'react'
import { Link } from 'react-router-dom'
import Customer_layout from '../../../pages/customer_layout'

const All_category = ({ data }) => {
	const categories = JSON.parse(localStorage.getItem('categories'));
	const section = <>
						<div className="bg-light py-3">
				          <div className="container">
				            <div className="row">
				              <div className="col-md-12 mb-0">
				                <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
				                <strong className="text-black">All Product</strong>
				              </div>
				            </div>
				          </div>
				        </div>
						<div className="site-section">
				          <div className="container">
				            <div className="row" id="productLocation">
				            	{data.map((product, index) => 
									{
										const cateName = categories.find(element => element.id == product.cateId);
										return(
											<div className="col-sm-6 col-lg-4 text-center item mb-4" key={index}>
										        <Link to={'/'+product.id}>
										        	<img src={product.gallery[0]} alt="Image" width="300" />
										        </Link>
										        <h3 className="text-dark">
										        	<p className="text-secondary h6">{cateName.name}</p>
										        	<Link to={'/'+product.id}>
										        		<p>{product.name}</p>
										        	</Link>
										        </h3>
										        <p className="price"><del></del>{product.price}</p>
										    </div>
										)
									}
								)}
				            </div>
				          </div>
				        </div>
					</>
	return (
		<>
			<Customer_layout section={section} />	
		</>
	)
}

export default All_category