import React, { useEffect, useState } from 'react';
import Admin_layout from '../../../pages/admin_layout';

const Dashboard = ({ data, categories, cartAdmin }) => {
	const [ total, setTotal ] = useState();
	const [ sellProducts, setSellProducts ] = useState() 
	const filterCart = cartAdmin.filter(element => element.status == 1);
	console.log(filterCart);
	useEffect(() => {
		const totalArr = [];
		const sellArr = [];
		for(let total of filterCart){
			totalArr.push(parseInt(total.total));
			for (let pro of total.products) {
				sellArr.push(parseInt(pro.count));
			}
		}
		const sumTotal = totalArr.reduce((a,b) => a+b);
		const sumSell = sellArr.reduce((a,b) => a+b);
		setTotal(sumTotal);
		setSellProducts(sumSell);
	}, [])
	const section = <>
						<h1>DASHBOARD</h1>
						<button type="button" className="btn btn-primary px-5 mx-1">
							<label>Số category đã đươc tạo: {categories.length}</label><br/>
							<label></label>
						</button>
						<button type="button" className="btn btn-primary px-5 mx-1">
							<label>Số product đã đươc tạo: {data.length}</label><br/>
							<label></label>
						</button>
						<button type="button" className="btn btn-primary px-5 mx-1">
							<label>Số đơn hàng đã giao: {filterCart.length} <br/>
							<label>Số sản phẩm đã bán: {sellProducts}</label> <br/>
							<label>Số tiền kiếm được: {total} VND</label> 
						</label>
						</button>
					</>
	return (
		<div>
			<Admin_layout section={section} />
		</div>
	)
}

export default Dashboard
