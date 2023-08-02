import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

function Portfolio() {
  return (
    <>
  
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-8 mb-3">
            <Header />
            <header className="mb-5">
              <h1 className="fw-light">Portfolio</h1>
              <Link className="btn btn-lg btn-dark px-4 me-3" to="/home">
              </Link>
            </header>
          </div>
        </div>
      </main>
      
    </>
  );
}

export default Portfolio;
