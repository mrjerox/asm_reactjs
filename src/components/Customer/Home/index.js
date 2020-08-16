import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData.js';
import Customer_layout from '../../../pages/customer_layout';

const Home = ({ data }) => {
	const getCategories = JSON.parse(localStorage.getItem('categories'));
	const section = <>
						<div className="site-blocks-cover" style={{backgroundImage: 'url("customer/img/hero_1.jpg")'}}>
					        <div className="container">
					          <div className="row">
					            <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
					              <div className="site-block-cover-content text-center">
					                <h2 className="sub-title">Cung cấp thuốc chính hãng, Cập nhật mỗi ngày</h2>
					                <h1>Chào mừng bạn đã đến với SStore</h1>
					                <p>
					                  <a href="#" className="btn btn-primary px-5 py-3">Mua ngay</a>
					                </p>
					              </div>
					            </div>
					          </div>
					        </div>
					    </div>
				        <div className="site-section">
				          <div className="container">
				            <div className="row align-items-stretch section-overlap">
				              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
				                <div className="banner-wrap bg-primary h-100">
				                  <a href="#" className="h-100">
				                    <h5>Giao hàng <br /> Miễn phí</h5>
				                    <p>
				                      Quanh khu vực Hà Nội và TP.Hồ Chí Minh
				                      <strong>Các tỉnh khác freeship với đơn hàng trên 1 triệu đồng</strong>
				                    </p>
				                  </a>
				                </div>
				              </div>
				              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
				                <div className="banner-wrap h-100">
				                  <a href="#" className="h-100">
				                    <h5>Giảm <br /> Giá 20%-50% </h5>
				                    <p>
				                      Nhiều chương trình giảm giá trong năm
				                      <strong>SStore luôn cung cấp thuốc tốt nhất và vừa túi tiền người tiêu dùng.</strong>
				                    </p>
				                  </a>
				                </div>
				              </div>
				              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
				                <div className="banner-wrap bg-warning h-100">
				                  <a href="#" className="h-100">
				                    <h5>Uy tín <br /> Trách nhiệm</h5>
				                    <p>
				                      SStore luôn đặt lợi ích của khách hàng lên hàng đầu
				                      <strong>Chúng tôi luôn luôn thực hiện trách nhiệm đối với khách hàng với lương tâm của người y sĩ.</strong>
				                    </p>
				                  </a>
				                </div>
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="site-section">
				          <div className="container">
				            <div className="row">
				              <div className="title-section text-center col-12">
				                <h2 className="text-uppercase">Sản phẩm mới</h2>
				              </div>
				            </div>
				            <div className="row" id="productLocation">
				            	{data.map((product, index) => 
									{
										const cateName = getCategories.find(element => element.id == product.cateId);
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
				            <div className="row mt-5">
				              <div className="col-12 text-center">
				                <a href="shop.html" className="btn btn-primary px-4 py-3">Xem thêm các sản phẩm khác</a>
				              </div>
				            </div>
				          </div>
				        </div>

				        <div className="site-section">
				          <div className="container">
				            <div className="row">
				            </div>
				            <div className="row">
				              <div className="col-md-12 block-3 products-wrap">
				              </div>
				            </div>
				          </div>
				        </div>
					</>

	return (
		<div>
			<Customer_layout section={section} />
		</div>
	)
}

export default Home