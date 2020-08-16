import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Product_detail = ({ data }) => {
	const { id } = useParams();
	const product = data.find(product => product.id === id);
	return (
		<>
			<div>
				<Link to="/admin/products">
					<button type="button" className="btn btn-primary">Back</button>
				</Link>
			</div>
			<div>
				<h1>{product.name}</h1>
				<p>{product.price}</p>
				<img src={product.image} />
				<p>{product.desc}</p>
			</div>
		</>
	)
}

export default Product_detail