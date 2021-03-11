import React from 'react';
import './Header.css'
import logo from '../../images/Premier_League-Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  main-menu">
  <div class="container-fluid">
      <Link to="/"><a class="navbar-brand logo" href="#"><img src={logo}></img></a></Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon button"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item navLi">
        <Link to="/"> <a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li class="nav-item navLi">
          <a class="nav-link" >About</a>
        </li>
        <li class="nav-item navLi">
          <a class="nav-link " >History</a>
        </li>
        <li class="nav-item navLi">
          <a class="nav-link">Achievements</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;