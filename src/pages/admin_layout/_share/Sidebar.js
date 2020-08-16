import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="/admin/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">
                  <i className="far fas fa-university nav-icon" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/cart" className="nav-link">
                  <i className="far fas fa-shopping-cart nav-icon" />
                  <p>Cart Manage</p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-folder" />
                  <p>Categories</p>
                  <i className="right fas fa-angle-left" />
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/categories" className="nav-link">
                      <i className="far fa-file nav-icon" />
                      <p>Manage Categories</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/add-category" className="nav-link">
                      <i className="far fas fa-plus nav-icon" />
                      <p>Add</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-folder" />
                  <p>Products</p>
                  <i className="right fas fa-angle-left" />
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/products" className="nav-link">
                      <i className="far fa-file nav-icon" />
                      <p>Manage Products</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/add-product" className="nav-link">
                      <i className="far fas fa-plus nav-icon" />
                      <p>Add</p>
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
}

export default Sidebar