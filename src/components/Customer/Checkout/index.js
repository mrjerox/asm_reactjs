import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Customer_layout from '../../../pages/customer_layout';
import axios from 'axios';

const Checkout = () => {
	const [ cart, setCart ] = useState(JSON.parse(localStorage.getItem('cart')));
	const total = localStorage.getItem('total');
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = async(newData) => {
		const response = await axios.post('http://localhost:3001/cart', {
			fname: newData.fname,
			lname: newData.lname,
			address: newData.address,
			email: newData.email,
			phone: newData.phone,
			notes: newData.notes,
			products: cart,
			total: total,
			status: 1
		});
		window.location = "/complete";
	}
	const section = <>
						<div className="bg-light py-3">
				          <div className="container">
				            <div className="row">
				              <div className="col-md-12 mb-0">
				                <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
				                <strong className="text-black">Checkout</strong>
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="site-section">
				          <div className="container">
				            <div className="row mb-5">
				              <div className="col-md-12">
				                <div className="bg-light rounded p-3">
				                  <p className="mb-0">Returning customer? <a href="#" className="d-inline-block">Click here</a> to login</p>
				                </div>
				              </div>
				            </div>
				            <form onSubmit={handleSubmit(onSubmit)}>
				            	<div className="row">
					              <div className="col-md-6 mb-5 mb-md-0">
					                <h2 className="h3 mb-3 text-black">Billing Details</h2>
					                <div className="p-3 p-lg-5 border">
					                  <div className="form-group row">
					                    <div className="col-md-6">
					                      <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
					                      <input type="text" className="form-control" id="c_fname" name="fname" ref={register({required: true, maxLength: 20, minLength: 4})} />
					                      {errors.fname && errors.fname.type === "required" && <label className="text-danger">Bạn chưa nhập thông tin</label>}
					                      {errors.fname && errors.fname.type === "maxLength" && <label className="text-danger">Chỉ sử dụng 20 ký tự</label>}
					                      {errors.fname && errors.fname.type === "minLength" && <label className="text-danger">Ít nhất nhập vào 5 ký tự</label>}
					                    </div>
					                    <div className="col-md-6">
					                      <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
					                      <input type="text" className="form-control" id="c_lname" name="lname" ref={register({required: true, maxLength: 20, minLength: 4})} />
					                      {errors.lname && errors.lname.type === "required" && <label className="text-danger">Bạn chưa nhập thông tin</label>}
					                      {errors.lname && errors.lname.type === "maxLength" && <label className="text-danger">Chỉ sử dụng 20 ký tự</label>}
					                      {errors.lname && errors.lname.type === "minLength" && <label className="text-danger">Ít nhất nhập vào 5 ký tự</label>}
					                    </div>
					                  </div>
					                  <div className="form-group row">
					                    <div className="col-md-12">
					                      <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
					                      <input type="text" className="form-control" id="c_address" name="address" placeholder="Street address" ref={register({ required: true })} />
					                      {errors.address && <label className="text-danger">Bạn chưa nhập địa chỉ</label>}
					                    </div>
					                  </div>
					                  <div className="form-group row mb-5">
					                    <div className="col-md-6">
					                      <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
					                      <input type="text" className="form-control" id="c_email_address" name="email" ref={register({ required: true, pattern: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/ })} />
					                      {errors.email && errors.email.type === "required" && <label className="text-danger">Bạn chưa nhập địa chỉ Email</label>}
					                      {errors.email && errors.email.type === "pattern" && <label className="text-danger">Email không hợp lệ</label>}
					                    </div>
					                    <div className="col-md-6">
					                      <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
					                      <input type="text" className="form-control" id="c_phone" name="phone" placeholder="Phone Number" ref={register({ required: true, pattern: /^[0-9]{10}$/ })} />
					                      {errors.phone && errors.phone.type === "required" && <label className="text-danger">Bạn chưa nhập địa chỉ số điện thoại</label>}
					                      {errors.phone && errors.phone.type === "pattern" && <label className="text-danger">Số điện thoại không hợp lệ, chỉ sử dụng 10 chữ số</label>}
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <label htmlFor="c_create_account" className="text-black" data-toggle="collapse" href="#create_an_account" role="button" aria-expanded="false" aria-controls="create_an_account"><input type="checkbox" defaultValue={1} id="c_create_account" /> Create an account?</label>
					                    <div className="collapse" id="create_an_account">
					                      <div className="py-2">
					                        <p className="mb-3">Create an account by entering the information below. If you are a returning customer
					                          please login at the top of the page.</p>
					                        <div className="form-group">
					                          <label htmlFor="c_account_password" className="text-black">Account Password</label>
					                          <input type="email" className="form-control" id="c_account_password" name="c_account_password" placeholder="true" />
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                  <div className="form-group">
					                    <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
					                    <textarea name="notes" id="c_order_notes" cols={30} rows={5} className="form-control" placeholder="Write your notes here..." defaultValue={""} ref={register()} />
					                  </div>
					                </div>
					              </div>
					              <div className="col-md-6">
					                <div className="row mb-5">
					                  <div className="col-md-12">
					                    <h2 className="h3 mb-3 text-black">Your Order</h2>
					                    <div className="p-3 p-lg-5 border">
					                      <table className="table site-block-order-table mb-5">
					                        <thead>
					                          <tr>
					                          	<th>Product</th>
					                            <th>Total</th>
					                          </tr>
					                          {cart.map((product, index) => {
					                          		return(
					                          			<tr key={index}>
					                          				<td>{product.name} x {product.count}</td>
					                          				<td>{product.price * product.count} VND</td>
					                          			</tr>
					                          		)
					                           })}
					                      	</thead>
					                        <tbody>
					                        </tbody>
					                        <tfoot>
					                          <tr>
					                            <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
					                            <td className="text-black font-weight-bold"><strong id="lastTotal">{total} VND</strong></td>
					                          </tr>
					                        </tfoot>
					                      </table>
					                      <div className="border mb-3">
					                        <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>
					                        <div className="collapse" id="collapsebank">
					                          <div className="py-2 px-4">
					                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
					                              payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
					                          </div>
					                        </div>
					                      </div>
					                      <div className="border mb-3">
					                        <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>
					                        <div className="collapse" id="collapsecheque">
					                          <div className="py-2 px-4">
					                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
					                              payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
					                          </div>
					                        </div>
					                      </div>
					                      <div className="border mb-5">
					                        <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>
					                        <div className="collapse" id="collapsepaypal">
					                          <div className="py-2 px-4">
					                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
					                              payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
					                          </div>
					                        </div>
					                      </div>
					                      <div className="form-group">
					                        <button className="btn btn-primary btn-lg btn-block" id="acceptBuy">Place
					                          Order</button>
					                      </div>
					                    </div>
					                  </div>
					                </div>
					              </div>
					            </div>
				            </form>
				            {/* </form> */}
				          </div>
				        </div>
					</>
	return (
		<>
			<Customer_layout section={section} /> 	
		</>
	)
}

export default Checkout