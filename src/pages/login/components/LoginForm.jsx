import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const [formData, setFormData] = useState({
      Email: "",
      password: "",
    });

  return (
    <div className="wrapper">
      <section>
        <div className="inner">
          <div className="image-holder">
            <img src="./form-wizard-2.jpg" alt="" />
          </div>
          <div className="form-content">
            <div className="form-header">
              <h3>LOGIN</h3>
              <div className="progressbar">
                <div
                  style={{
                    borderRadius:"5px",
                    width: "100%",
                  }}
                ></div>
              </div>
            </div>
            <div className="form-body">
            <div className="form-row mt-5">
								<div className="form-holder">
									<input type="email" placeholder="Your Email" className="form-control"/>
								</div>
								<div className="form-holder">
									<input type="password" placeholder="Password" className="form-control"/>
								</div>
							</div>
            </div>
            <div className="form-footer">
              <button className="btn form-buttons">Submit</button>
            </div>
            <p className="mt-3">Do not have an account click <Link to="/register">here</Link></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginForm