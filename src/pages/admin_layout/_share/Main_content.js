import React from 'react'
import PropTypes from 'prop-types'

const Main_content = ({ section }) => {
	return (
      	<div className="content-wrapper">
	        {section}
	    </div>
    );
}

export default Main_content