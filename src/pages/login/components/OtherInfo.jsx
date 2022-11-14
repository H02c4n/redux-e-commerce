import React from 'react'

const OtherInfo = () => {
  return (
    <div>
      <div className="form-row">
          <div className="form-holder w-100">
            <textarea name id placeholder="Your messagere here!" className="form-control" style={{height: '99px'}} defaultValue={""} />
          </div>
        </div>
        <div className="checkbox-circle mt-24">
          <label>
            <input type="checkbox" defaultChecked />  Please accept <a href="#">terms and conditions ?</a>
            <span className="checkmark" />
          </label>
        </div>
    </div>
  )
}

export default OtherInfo