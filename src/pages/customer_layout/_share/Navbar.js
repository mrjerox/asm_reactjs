import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ cart }) => {
	if( cart === undefined && localStorage.getItem('cart') === null){
		cart = [];
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
	}
	const getCategories = JSON.parse(localStorage.getItem('categories'));

	return (
		<>
			<div className="site-navbar py-2">
		        <div className="search-wrap">
		          <div className="container">
		            <a href="#" className="search-close js-search-close"><span className="icon-close2" /></a>
		            <form action="#" method="post">
		              <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
		            </form>
		          </div>
		        </div>
		        <div className="container">
		          <div className="d-flex align-items-center justify-content-between">
		            <div className="logo">
		              <div className="site-logo">
		                <a href="index.html" className="js-logo-clone">SStore</a>
		              </div>
		            </div>
		            <div className="main-nav d-none d-lg-block">
		              <nav className="site-navigation text-right text-md-center" role="navigation">
		                <ul className="site-menu js-clone-nav d-none d-lg-block">
		                  <li className="active"><Link to="/home">Home</Link></li>
		                  <li className="has-children">
		                    <a href="#">Products</a>
		                    <ul className="dropdown" id="menus">
		                      <li>
		                      	<Link to="/category">
		                      		All Products
		                      	</Link>
		                      </li>
		                      {getCategories.map((cate, index) => {
		                      	return(
		                      		<li key={index}>
		                      			<Link to={/category/ + cate.id}>
		                      				{cate.name}
		                      			</Link>
		                      		</li>
		                      	)
		                      })}
		                    </ul>
		                  </li>
		                  <li><a href="shop.html">News</a></li>
		                  <li><a href="about.html">About</a></li>
		                  <li><a href="contact.html">Contact</a></li>
		                </ul>
		              </nav>
		            </div>
		            <div className="icons">
		              <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search" /></a>
		              <a href="cart.html" className="icons-btn d-inline-block bag">
		                <span className="icon-shopping-bag" />
		                <span className="number" id="count">{cart.length}</span>
		              </a>
		              <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu" /></a>
		            </div>
		          </div>
		        </div>
		      </div>	
		</>
	)
}

export default Navbar