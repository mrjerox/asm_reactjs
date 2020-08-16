import React from 'react'
import { Link } from 'react-router-dom'

const Demo = () => {
	return (
		<>
			<ul>
				<li>
					<Link to="/admin/dashboard">
						Dashboard
					</Link>		
				</li>
				<li>
					<Link to="/home">
						Home
					</Link>	
				</li>
			</ul>
		</>
	)
}

export default Demo