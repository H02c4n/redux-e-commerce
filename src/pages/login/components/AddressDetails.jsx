import React from 'react'

const AddressDetails = () => {
  return (
    <div>
      <div className="form-row">
          <div className="form-holder w-100">
            <input type="text" placeholder="Address" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-holder">
            <input type="text" placeholder="City" className="form-control" />
          </div>
          <div className="form-holder">
            <input type="text" placeholder="Zip Code" className="form-control" />
          </div>
        </div>
        <div className="form-row">
           <input type="text" placeholder="Country" className="form-control" />
          <div className="form-holder" />
        </div>
    </div>
  )
}

export default AddressDetails