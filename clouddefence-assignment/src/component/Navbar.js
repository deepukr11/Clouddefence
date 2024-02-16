import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><strong>Colouddefence</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {location.pathname === "/" ?
                ""
                :
                <>
                  {location.pathname === "/chatBoat" ?
                  <Link className="nav-link active" aria-current="page" to="/auth">Exercise 1</Link>
                    :
                  <Link className="nav-link active" aria-current="page" to="/chatBoat">Exercise 2</Link>
                  }
                </>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}



