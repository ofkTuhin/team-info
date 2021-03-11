import React from 'react';
import './Header.css'
import logo from '../../images/Premier_League-Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  main-menu">
  <div class="container-fluid">
      <Link to="/"><a class="navbar-brand logo" href="index.html"><img src={logo} alt="logo"></img></a></Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon button"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
      <Link to="/"><li class="nav-item navLi">
        Home
        </li></Link>
        <li class="nav-item navLi">
        About
        </li>
        <li class="nav-item navLi">
       History
        </li>
        <li class="nav-item navLi">
          Achievements
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;