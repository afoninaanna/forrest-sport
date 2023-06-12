import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav>
          <ul className="nav-list">
              <li><NavLink to="/">Главная</NavLink></li>
              <li><NavLink to="/health" className="category">Здоровье</NavLink></li>
              <li><NavLink className="category" to="/exercises">Упражнения</NavLink></li>
              <li><NavLink className="category" to="/motivation">Мотивация</NavLink></li>
              <li><NavLink to="/addArticle">Добавить статью</NavLink></li>
          </ul>
          <img src={'/images/forrest.jpg'} alt="logo" />
      </nav>
  )
}

export default Navbar