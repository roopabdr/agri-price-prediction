import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import AboutAuthor from './pages/AboutAuthor/AboutAuthor';
import AboutPublishedBooks from './pages/AboutPublishedBooks/AboutPublishedBooks';
import Contact from './pages/Contact/Contact';
import SidebarMenu from './pages/SidebarMenu/Sidebarmenu';

const App = () => {  

  const [displayStyle, setDisplayStyle] = useState({
    'displayStyle': ''
  });

  const onMenuClick = (event) => {
    console.log("menu click", event.currentTarget.dataset.id);

    event.currentTarget.dataset.id === 'home_menu' ?
    setDisplayStyle({
      'displayStyle': 'home_menu'
    }) 
    :  
    (event.currentTarget.dataset.id === 'author_menu' ? 
    setDisplayStyle({
      'displayStyle': 'author_menu'
    }) 
    :
    (event.currentTarget.dataset.id === 'published_menu' ? 
    setDisplayStyle({
      'displayStyle': 'published_menu'
    })
    : setDisplayStyle({
      'displayStyle': 'contact_menu'
    })
    )    
    )
  }

  useEffect(() => {
    setDisplayStyle({
      'displayStyle': 'home_menu'
    });
  }, []);

  return (
    <div className="App">
      <div className="main">
        <header>Agricultural Price Prediction</header>

        <div className="main_main">
          <ul>
            <li onClick = {onMenuClick.bind(this)} data-id="home_menu"><a href="#home">Home</a></li>
            <li onClick = {onMenuClick.bind(this)} data-id="author_menu"><a href="#author">About Author</a></li>
            <li onClick = {onMenuClick.bind(this)} data-id="published_menu"><a href="#published">About Published Books</a></li>
            <li onClick = {onMenuClick.bind(this)} data-id="contact_menu"><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="content">
          <div className="text_content">
            {displayStyle.displayStyle === 'home_menu' ?
              <Home /> :
              displayStyle.displayStyle === 'author_menu' ? 
              <AboutAuthor /> :
              displayStyle.displayStyle === 'published_menu' ?
              <AboutPublishedBooks /> :
              displayStyle.displayStyle === 'contact_menu' ?
              <Contact /> :
              <Home />
            }
          </div>
          <div className="sidebar_menu">
            <SidebarMenu />
          </div>
        </div>
      </div>
    </div>
  );  
}

export default App;
