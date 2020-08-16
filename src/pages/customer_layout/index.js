import React, { useEffect, useState } from 'react';
import ScriptTag from 'react-script-tag';
import Navbar from './_share/Navbar.js';
import Main_content from './_share/Main_content.js';
import Footer from './_share/Footer.js';


export default ({ section, cart }) => {

	// useEffect(() => {
	// 	const head = document.querySelector('head');
	// 	head.innerHTML = "<title>Hiệu thuốc S &mdash; Colorlib Template</title> <meta charset='utf-8'> <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'> <link href='https://fonts.googleapis.com/css?family=Rubik:400,700|Crimson+Text:400,400i' rel='stylesheet'> <link rel='stylesheet' href='/customer/fonts/icomoon/style.css'> <link rel='stylesheet' href='/customer/css/bootstrap.min.css'> <link rel='stylesheet' href='/customer/css/magnific-popup.css'> <link rel='stylesheet' href='/customer/css/jquery-ui.css'> <link rel='stylesheet' href='/customer/css/owl.theme.default.min.css'> <link rel='stylesheet' href='/customer/css/aos.css'> <link rel='stylesheet' href='/customer/css/style.css'>"
	// }, [])
	return (
		<div className="site-wrap">
				<Navbar cart={cart} />
				<Main_content section={section} />
				<Footer />
				<ScriptTag src="/customer/js/jquery-3.3.1.min.js" />
				<ScriptTag src="/customer/js/jquery-ui.js" />
				<ScriptTag src="/customer/js/popper.min.js" />
				<ScriptTag src="/customer/js/bootstrap.min.js" />
				<ScriptTag src="/customer/js/jquery.magnific-popup.min.js" />
				<ScriptTag src="/customer/js/aos.js" />
				<ScriptTag src="/customer/js/main.js" />
		</div>
	)
}

