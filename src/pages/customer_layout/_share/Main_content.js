import React from 'react'

const Main_content = ({ section }) => {
	return (
			<>
				{section}
		        <div className="site-section bg-secondary bg-image" style={{backgroundImage: 'url("/customer/img/bg_2.jpg")'}}>
		          <div className="container">
		            <div className="row align-items-stretch">
		              <div className="col-lg-6 mb-5 mb-lg-0">
		                <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: 'url("/customer/img/bg_1.jpg")'}}>
		                  <div className="banner-1-inner align-self-center">
		                    <h2>Nguồn gốc</h2>
		                    <p>Tất cả các loại thuốc từ SStore đều được kiểm định rõ ràng xuất sứ, đảm bảo an toàn cho người sử dụng.
		                    </p>
		                  </div>
		                </a>
		              </div>
		              <div className="col-lg-6 mb-5 mb-lg-0">
		                <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: 'url("/customer/img/bg_2.jpg")'}}>
		                  <div className="banner-1-inner ml-auto  align-self-center">
		                    <h2>Y Sĩ</h2>
		                    <p>Đều là những y sĩ lâu năm trong ngành khám bệnh, bốc thuốc nên khách hàng luôn an tâm mua thuốc tại SStore.
		                    </p>
		                  </div>
		                </a>
		              </div>
		            </div>
		          </div>
		        </div>
			</>
	)
}

export default Main_content