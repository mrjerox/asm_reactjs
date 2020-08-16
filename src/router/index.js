import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Demo from '../components/Demo';
// products components
import Products from '../components/Admin/Products';
import Product_detail from '../components/Admin/Products/Product_detail.js';
import Add_product from '../components/Admin/Products/Add_product.js';
import Edit_product from '../components/Admin/Products/Edit_product.js';
// categories components
import Categories from '../components/Admin/Categories';
import Add_category from '../components/Admin/Categories/Add_category';
import Edit_category from '../components/Admin/Categories/Edit_category';
// cart components
import CartAdmin from '../components/Admin/CartAdmin';
import Detail_cart from '../components/Admin/CartAdmin/Detail_cart';
// dashboard
import Dashboard from '../components/Admin/Dashboard';
// front end
import Home from '../components/Customer/Home';
import ProductDetail from '../components/Customer/ProductDetail';
import ProductsOfCategory from '../components/Customer/ProductsOfCategory';
import All_category from '../components/Customer/ProductsOfCategory/All_category';
import Cart from '../components/Customer/Cart';
import Checkout from '../components/Customer/Checkout';
import Thankyou from '../components/Customer/Thankyou';

const Router_website = ({ data, onRemove, onRemoveCategory, onEdit, categories, cartAdmin }) => {
	return (
		<>
			<Router>
		        <Switch>
			          <Route path="/admin/product/:id">
						<Product_detail data={data} />						
			          </Route>
			          <Route path="/admin/edit-product/:id">
						<Edit_product data={data} categories={categories} />						
			          </Route>
			          <Route path="/admin/add-product">
						<Add_product data={data} categories={categories} />						
			          </Route>
			          <Route path="/admin/products">
						<Products data={data} onRemove={onRemove} categories={categories} />						
			          </Route>
			          <Route path="/admin/edit-category/:id">
						<Edit_category categories={categories} onRemove={onRemove} />						
			          </Route>
			          <Route path="/admin/add-category">
						<Add_category />						
			          </Route>
			          <Route path="/admin/categories">
						<Categories categories={categories} onRemoveCategory={onRemoveCategory} data={data} />						
			          </Route>
			          <Route path="/admin/cart/:id">
						<Detail_cart cartAdmin={cartAdmin} />						
			          </Route>
			          <Route path="/admin/cart">
						<CartAdmin cartAdmin={cartAdmin} />						
			          </Route>
			          <Route path="/admin/dashboard">
						<Dashboard data={data} categories={categories} cartAdmin={cartAdmin}  />						
			          </Route>
			          <Route path="/complete">
						<Thankyou />						
			          </Route>
			          <Route path="/checkout">
						<Checkout />						
			          </Route>
			          <Route path="/cart">
						<Cart />						
			          </Route>
			          <Route path="/category/:id">
						<ProductsOfCategory data={data} />						
			          </Route>
			          <Route path="/category">
						<All_category data={data} />						
			          </Route>
			          <Route path="/home">
						<Home data={data} />						
			          </Route>
			          <Route path="/:id">
						<ProductDetail data={data} />						
			          </Route>
			          <Route path="/">
						<Demo />						
			          </Route>
		        </Switch>
		    </Router>
		</>
	)
}

export default Router_website