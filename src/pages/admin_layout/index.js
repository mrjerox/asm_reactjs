import React, { useEffect } from 'react'
import ScriptTag from 'react-script-tag'
import Header from './_share/Header.js'
import Sidebar from './_share/Sidebar.js'
import Main_content from './_share/Main_content.js'
import Footer from './_share/Footer.js'
import PropTypes from 'prop-types'
// import '../../asset/admin/dist/css/adminlte.min.css'

export default ({section}) => {
	useEffect(() => {
		const head = document.querySelector('head');
		document.head.innerHTML = "<title>React App</title> <meta charSet='utf-8' /> <meta name='theme-color' content='#000000' /> <meta name='description' content='Web site created using create-react-app' /> <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossOrigin='anonymous' /> <link href='https://fonts.googleapis.com/css?family=Rubik:400,700|Crimson+Text:400,400i' rel='stylesheet' /> <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' rel='stylesheet' /> <link rel='apple-touch-icon' href='/logo192.png' /> <link rel='manifest' href='/manifest.json' /> <link rel='icon' href='/favicon.ico' /> <meta name='viewport' content='width=device-width, initial-scale=1' /> <link rel='stylesheet' href='/admin/dist/css/adminlte.min.css' /> <link rel='stylesheet' href='/admin/plugins/fontawesome-free/css/all.min.css' />";
	}, [])
	return (
			<div className="wrapper">
				<Header />
				<Sidebar />
				<Main_content section={section} />
				<Footer />
				<ScriptTag src="/admin/plugins/jquery/jquery.min.js" />
				<ScriptTag src="/admin/plugins/bootstrap/js/bootstrap.bundle.min.js" />
				<ScriptTag src="/admin/dist/js/adminlte.js" />
				<ScriptTag src="/admin/dist/js/demo.js" />	
			</div>	
	)
}
