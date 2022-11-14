import React from "react";

const PersonalInfo = () => {
  return (
    <div>

      <div className="form-row">
        <div className="form-holder">
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
          />
        </div>
        <div className="form-holder">
          <input type="text" placeholder="Last Name" className="form-control" />
        </div>
      </div>

      <div className="form-row">
								<div className="form-holder">
									<input type="email" placeholder="Your Email" className="form-control"/>
								</div>
								<div className="form-holder">
									<input type="password" placeholder="Password" className="form-control"/>
								</div>
							</div>

              <div className="form-row">
								<div className="form-holder">
									<input type="text" placeholder="Age" className="form-control"/>
								</div>
								<div className="form-holder" style={{alignSelf: "flex-end", transform: "translateY(4px)"}}>
									<div className="checkbox-tick">
										<label className="male">
											<input type="radio" name="gender" value="male" checked/> Male<br/>
											<span className="checkmark"></span>
										</label>
										<label className="female">
											<input type="radio" name="gender" value="female"/> Female<br/>
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
							</div>
    </div>
  );
};

export default PersonalInfo;
