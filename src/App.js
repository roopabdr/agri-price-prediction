import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import AboutAuthor from './pages/AboutAuthor/AboutAuthor';
import AboutPublishedBooks from './pages/AboutPublishedBooks/AboutPublishedBooks';
import Contact from './pages/Contact/Contact';
import SidebarMenu from './pages/SidebarMenu/Sidebarmenu';
import { Bajra } from './pages/Data/Bajra';
import { Onion } from './pages/Data/Onion';
import { Potato } from './pages/Data/Potato';

const App = () => {

  const [displayStyle, setDisplayStyle] = useState({
    'displayStyle': ''
  });

  const [commodity, setCommodity] = useState({
    'commodity': null
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
          : (event.currentTarget.dataset.id === 'Bajra' ?
            setDisplayStyle({
              'displayStyle': 'bajra_menu'
            })
            : (event.currentTarget.dataset.id === 'Onion' ?
              setDisplayStyle({
                'displayStyle': 'onion_menu'
              })
              : (event.currentTarget.dataset.id === 'Potato' ?
                setDisplayStyle({
                  'displayStyle': 'potato_menu'
                })
                : setDisplayStyle({
                  'displayStyle': 'contact_menu'
                })
              )
            )
          )
        )
      )

    if (event.currentTarget.dataset.id === 'Bajra') {
      setCommodity({
        'commodity': Bajra
      });
      // console.log(Bajra);
    } else if (event.currentTarget.dataset.id === 'Onion') {
      setCommodity({
        'commodity': Onion
      });
    } else if (event.currentTarget.dataset.id === 'Potato') {
      setCommodity({
        'commodity': Potato
      });
    }
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
            <li onClick={onMenuClick.bind(this)} data-id="home_menu"><a href="#home">Home</a></li>
            <li onClick={onMenuClick.bind(this)} data-id="author_menu"><a href="#author">About Author</a></li>
            <li onClick={onMenuClick.bind(this)} data-id="published_menu"><a href="#published">About Published Books</a></li>
            <li onClick={onMenuClick.bind(this)} data-id="contact_menu"><a href="#contact">Contact</a></li>
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
                    displayStyle.displayStyle === 'bajra_menu'
                      || displayStyle.displayStyle === 'onion_menu'
                      || displayStyle.displayStyle === 'potato_menu' ?
                      <div className="commodity">
                        <h2>{displayStyle.displayStyle === 'bajra_menu' ? "Bajra"
                          : displayStyle.displayStyle === 'onion_menu' ? "Onion"
                            : displayStyle.displayStyle === 'potato_menu' ? "Potato"
                              : ""}</h2>
                        <div>
                          <div className="grid-container-header">
                            <div>Year : Month Week#</div>
                            <div>Predicted Price(INR)/Quintal</div>
                            <div>Actual Price(INR)/Quintal</div>
                            <div>Percentage Difference</div>
                            <div>Year</div>
                          </div>
                          {
                            commodity.commodity !== null ?
                              commodity.commodity.map((item, index) => {
                                return <div className="grid-container" key={'tr' + index}>
                                  <div className="grid-item">{item["Year : Month Week#"]}</div>
                                  <div className="grid-item">{item["Predicted Price(INR)/Quintal"]}</div>
                                  <div className="grid-item">{item["Actual Price(INR)/Quintal"]}</div>
                                  <div className="grid-item">{item["Percentage Difference"]}</div>
                                  <div className="grid-item">{item["YEAR"]}</div>
                                </div>
                              })
                              : console.log('commodityData otherwise', commodity.commodity)
                          }
                        </div>
                      </div> :
                      <Home />
            }
          </div>
          <div className="sidebar_menu">
            <SidebarMenu side={onMenuClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;