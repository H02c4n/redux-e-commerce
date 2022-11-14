import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
   <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to="/">H02c4n</Link>
            
          <form>
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Search product name..."/>
              <button className="btn btn-outline-info" type="submit">Search</button>
          </div>
          </form>
          <Link className="nav-link" to="/login">Login</Link>
        </div>
      </nav>
  </>
    
  )
}

export default Navbar