import React from 'react'
import { Link} from "react-router-dom";

const Navbar = ({filterResult,setFiltering,count}) => {
        return (
          <nav className="navbar orange navbar-expand-lg navbar-light bg-light ">
             <Link className="fas fa-shopping-cart" to="../views/index.js">Mes Courses en Ligne</Link>
            
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="ml-auto cart">
                <div>
                  <form className="search form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={(e) => {
                        setFiltering(e.target.value.length != 0)  
                        filterResult(e.target.value)

                        }}/>
                  </form>
                </div>
                <div className="menu-right">
                  <Link  to="/CartPage">
                    <i className="fas fa-shopping-bag fa-2x"></i>
                  </Link>
                    <span className="badge rounded-pill bg-success">{count != 0 && count}</span>
                  
                </div>
              </div>
            </div>
            
          </nav>
        );
      };

export default Navbar