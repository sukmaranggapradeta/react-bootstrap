import React from 'react'

function Footer() {
    return (
        <div className="main-footer bg-dark text-white p-5">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-3 col-sm-6">   
                        <h4>COlum 1</h4>
                        <ul className="list-unstyled">
                            <li>list one</li>
                            <li>list two</li>
                            <li>list three</li>
                            <li>list four</li>
                        </ul> 
                    </div>
                    <div className="col-md-3 col-sm-6">   
                        <h4>COlum 2</h4>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-secondary">list one</a></li>
                            <li><a href="/" className="text-secondary">list two</a></li>
                            <li><a href="/" className="text-secondary">list three</a></li>
                            <li><a href="/" className="text-secondary">list four</a></li>
                        </ul> 
                    </div>
                    <div className="col-md-3 col-sm-6">   
                        <h4>COlum 3</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">list one</a></li>
                            <li><a href="/">list two</a></li>
                            <li><a href="/">list three</a></li>
                            <li><a href="/">list four</a></li>
                        </ul> 
                    </div>
                    <div className="col-md-3 col-sm-6">   
                        <h4>COlum 4</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">list one</a></li>
                            <li><a href="/">list two</a></li>
                            <li><a href="/">list three</a></li>
                            <li><a href="/">list four</a></li>
                        </ul> 
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        All Right Copy @2019
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;