import React, { useState, useEffect } from 'react';
import Customer_layout from '../../../pages/customer_layout';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

export default ({ data }) => {
	const { id } = useParams();
	const singleProduct = data.find(product => product.id == id );
	const images = [];
	const categories = JSON.parse(localStorage.getItem('categories'));
	const cateName = categories.find(element => element.id == singleProduct.cateId);

	const local = (JSON.parse(localStorage.getItem('cart')) == null) ? []  : JSON.parse(localStorage.getItem('cart'));
	console.log(local);
	for (let img of singleProduct.gallery) {
		images.push({original:img});
	}
	const [ count, setCount ] = useState();
	const onHandleChange = (e) => {
		console.log(e.target.value);
		setCount(e.target.value);
	}
	const onHandleClick = () => {
		local.push({id: singleProduct.id, name: singleProduct.name, image: images[0], price: singleProduct.price, count: count});
		localStorage.setItem('cart', JSON.stringify(local));
		window.location = '/cart';
	}

	const section = <>
			<div className="bg-light py-3">
	          <div className="container">
	            <div className="row">
	              <div className="col-md-12 mb-0">
	                <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
	                <a href="index.html">{cateName.name}</a> <span className="mx-2 mb-0">/</span>
	                <strong className="text-black">{singleProduct.name}</strong>
	              </div>
	            </div>
	          </div>
	        </div>
			 <div className="site-section">
		        <div className="container">
		          <div className="row">
		            <div className="col-md-5 mr-auto">
		              <div>
		              	<ImageGallery items={images} />
		            </div>
		            </div>
		            <div className="col-md-6">
		              <h2 className="text-black">{singleProduct.name}</h2>
		              <p><strong className="text-black h6">{singleProduct.price} VND</strong></p>
		              <div className="mb-5">
		                <div className="input-group mb-3" style={{maxWidth: '220px'}}>
		                  <input type="number" className="form-control text-center" defaultValue={0} aria-label="Example text with button addon" aria-describedby="button-addon1" id="count" onChange={onHandleChange} />
		                </div>
		              </div>
		              <p><a href="#" className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary" id="addButton" onClick={onHandleClick}>Add To Cart</a></p>
		              <div className="mt-5">
		                <ul className="nav nav-pills mb-3 custom-pill" id="pills-tab" role="tablist">
		                  <li className="nav-item">
		                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Ordering Information</a>
		                  </li>
		                  <li className="nav-item">
		                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Specifications</a>
		                  </li>
		                </ul>
		                <div className="tab-content" id="pills-tabContent">
		                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
		                    <table className="table custom-table">
		                      <thead>
		                        <tr><th>Material</th>
		                          <th>Description</th>
		                          <th>Packaging</th>
		                        </tr></thead>
		                      <tbody>
		                        <tr>
		                          <th scope="row">OTC022401</th>
		                          <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
		                          <td>1 BT</td>
		                        </tr>
		                        <tr>
		                          <th scope="row">OTC022401</th>
		                          <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
		                          <td>144/CS</td>
		                        </tr>
		                        <tr>
		                          <th scope="row">OTC022401</th>
		                          <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
		                          <td>1 EA</td>
		                        </tr>
		                      </tbody>
		                    </table>
		                  </div>
		                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
		                    <table className="table custom-table">
		                      <tbody>
		                        <tr>
		                          <td>HPIS CODE</td>
		                          <td className="bg-light">999_200_40_0</td>
		                        </tr>
		                        <tr>
		                          <td>HEALTHCARE PROVIDERS ONLY</td>
		                          <td className="bg-light">No</td>
		                        </tr>
		                        <tr>
		                          <td>LATEX FREE</td>
		                          <td className="bg-light">Yes, No</td>
		                        </tr>
		                        <tr>
		                          <td>MEDICATION ROUTE</td>
		                          <td className="bg-light">Topical</td>
		                        </tr>
		                      </tbody>
		                    </table>
		                  </div>
		                </div>
		              </div>
		            </div>
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

