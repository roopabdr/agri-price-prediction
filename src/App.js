import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import AboutAuthor from './pages/AboutAuthor/AboutAuthor';
import AboutPublishedBooks from './pages/AboutPublishedBooks/AboutPublishedBooks';
import Contact from './pages/Contact/Contact';
import SidebarMenu from './pages/SidebarMenu/Sidebarmenu';
import { Bajra } from './pages/Data/Bajra';
import { Blackgram } from './pages/Data/Blackgram';
import { Copra } from './pages/Data/Copra';
import { Greengram } from './pages/Data/Greengram';
import { Groundnut } from './pages/Data/Groundnut';
import { Jowar } from './pages/Data/Jowar';
import { Maize } from './pages/Data/Maize';
import { Onion } from './pages/Data/Onion';
import { Paddy } from './pages/Data/Paddy';
import { Potato } from './pages/Data/Potato';
import { Ragi } from './pages/Data/Ragi';
import { Sunflower } from './pages/Data/Sunflower';
import { Tur } from './pages/Data/Tur';

const App = () => {

  const [displayStyle, setDisplayStyle] = useState({
    'displayStyle': ''
  });

  const [commodity, setCommodity] = useState({
    'commodity': null
  });

  const [yearValue, setYearValue] = useState({
    'yearValue': ''
  });

  const onMenuClick = (event) => {
    // console.log("menu click", event.currentTarget.dataset.id);

    setYearValue({
      'yearValue': ''
    });

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
                : (event.currentTarget.dataset.id === 'Blackgram' ?
                  setDisplayStyle({
                    'displayStyle': 'blackgram_menu'
                  })
                  : (event.currentTarget.dataset.id === 'Copra' ?
                    setDisplayStyle({
                      'displayStyle': 'copra_menu'
                    })
                    : (event.currentTarget.dataset.id === 'Greengram' ?
                      setDisplayStyle({
                        'displayStyle': 'greengram_menu'
                      })
                      : (event.currentTarget.dataset.id === 'Groundnut' ?
                        setDisplayStyle({
                          'displayStyle': 'groundnut_menu'
                        })
                        : (event.currentTarget.dataset.id === 'Jowar' ?
                          setDisplayStyle({
                            'displayStyle': 'jowar_menu'
                          })
                          : (event.currentTarget.dataset.id === 'Maize' ?
                            setDisplayStyle({
                              'displayStyle': 'maize_menu'
                            })
                            : (event.currentTarget.dataset.id === 'Paddy' ?
                              setDisplayStyle({
                                'displayStyle': 'paddy_menu'
                              })
                              : (event.currentTarget.dataset.id === 'Ragi' ?
                                setDisplayStyle({
                                  'displayStyle': 'ragi_menu'
                                })
                                : (event.currentTarget.dataset.id === 'Sunflower' ?
                                  setDisplayStyle({
                                    'displayStyle': 'sunflower_menu'
                                  })
                                  : (event.currentTarget.dataset.id === 'Tur' ?
                                    setDisplayStyle({
                                      'displayStyle': 'tur_menu'
                                    })
                                    : setDisplayStyle({
                                      'displayStyle': 'contact_menu'
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )

    if (event.currentTarget.dataset.id === 'Bajra') {
      setCommodity({
        'commodity': Bajra
      });
    } else if (event.currentTarget.dataset.id === 'Blackgram') {
      setCommodity({
        'commodity': Blackgram
      });
    } else if (event.currentTarget.dataset.id === 'Copra') {
      setCommodity({
        'commodity': Copra
      });
    } else if (event.currentTarget.dataset.id === 'Greengram') {
      setCommodity({
        'commodity': Greengram
      });
    } else if (event.currentTarget.dataset.id === 'Groundnut') {
      setCommodity({
        'commodity': Groundnut
      });
    } else if (event.currentTarget.dataset.id === 'Jowar') {
      setCommodity({
        'commodity': Jowar
      });
    } else if (event.currentTarget.dataset.id === 'Maize') {
      setCommodity({
        'commodity': Maize
      });
    } else if (event.currentTarget.dataset.id === 'Onion') {
      setCommodity({
        'commodity': Onion
      });
    } else if (event.currentTarget.dataset.id === 'Paddy') {
      setCommodity({
        'commodity': Paddy
      });
    } else if (event.currentTarget.dataset.id === 'Potato') {
      setCommodity({
        'commodity': Potato
      });
    } else if (event.currentTarget.dataset.id === 'Ragi') {
      setCommodity({
        'commodity': Ragi
      });
    } else if (event.currentTarget.dataset.id === 'Sunflower') {
      setCommodity({
        'commodity': Sunflower
      });
    } else if (event.currentTarget.dataset.id === 'Tur') {
      setCommodity({
        'commodity': Tur
      });
    }
  }


  let filteredCommodity = null;
  let initCommodity = null;

  const onInputChange = (event) => {
    // console.log("input datset id", event.currentTarget.dataset.id);
    // console.log("input change", event.target.value);

    setYearValue({
      'yearValue': event.target.value
    });

    initCommodity = displayStyle.displayStyle === "bajra_menu"
      ? Bajra
      : (
        displayStyle.displayStyle === "onion_menu"
          ? Onion
          : (
            displayStyle.displayStyle === "potato_menu"
              ? Potato
              : (
                displayStyle.displayStyle === "blackgram_menu"
                  ? Blackgram
                  : (
                    displayStyle.displayStyle === "copra_menu"
                      ? Copra
                      : (
                        displayStyle.displayStyle === "greengram_menu"
                          ? Greengram
                          : (
                            displayStyle.displayStyle === "groundnut_menu"
                              ? Groundnut
                              : (
                                displayStyle.displayStyle === "jowar_menu"
                                  ? Jowar
                                  : (
                                    displayStyle.displayStyle === "maize_menu"
                                      ? Maize
                                      : (
                                        displayStyle.displayStyle === "paddy_menu"
                                          ? Paddy
                                          : (
                                            displayStyle.displayStyle === "ragi_menu"
                                              ? Ragi
                                              : (
                                                displayStyle.displayStyle === "sunflower_menu"
                                                  ? Sunflower
                                                  : (
                                                    displayStyle.displayStyle === "Tur_menu"
                                                      ? Tur
                                                      : null
                                                  )
                                              )
                                          )
                                      )
                                  )
                              )
                          )
                      )
                  )
              )
          )
      );

    filteredCommodity = initCommodity;

    filteredCommodity = event.currentTarget.dataset.id === "year"
      ?
      filteredCommodity.filter(comm => {
        if (comm !== null) {
          return comm["YEAR"].toString().includes(event.target.value);
        } else {
          return initCommodity;
        }
      })
      :
      (
        event.currentTarget.dataset.id === "month"
          ? filteredCommodity.filter(comm => {
            if (comm !== null) {
              return comm["Year : Month Week#"].toString().includes(event.target.value);
            } else {
              return initCommodity;
            }
          })
          : initCommodity
      );

    setCommodity({
      'commodity': filteredCommodity
    });
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
                      || displayStyle.displayStyle === 'blackgram_menu'
                      || displayStyle.displayStyle === 'copra_menu'
                      || displayStyle.displayStyle === 'greengram_menu'
                      || displayStyle.displayStyle === 'groundnut_menu'
                      || displayStyle.displayStyle === 'jowar_menu'
                      || displayStyle.displayStyle === 'maize_menu'
                      || displayStyle.displayStyle === 'onion_menu'
                      || displayStyle.displayStyle === 'paddy_menu'
                      || displayStyle.displayStyle === 'potato_menu'
                      || displayStyle.displayStyle === 'ragi_menu'
                      || displayStyle.displayStyle === 'sunflower_menu'
                      || displayStyle.displayStyle === 'tur_menu' ?
                      <div className="commodity">
                        <h2>{displayStyle.displayStyle === 'bajra_menu' ? "Bajra"
                          : displayStyle.displayStyle === 'blackgram_menu' ? "Blackgram"
                            : displayStyle.displayStyle === 'copra_menu' ? "Copra"
                              : displayStyle.displayStyle === 'greengram_menu' ? "Greengram"
                                : displayStyle.displayStyle === 'groundnut_menu' ? "Groundnut"
                                  : displayStyle.displayStyle === 'jowar_menu' ? "Jowar"
                                    : displayStyle.displayStyle === 'maize_menu' ? "Maize"
                                      : displayStyle.displayStyle === 'onion_menu' ? "Onion"
                                        : displayStyle.displayStyle === 'paddy_menu' ? "Paddy"
                                          : displayStyle.displayStyle === 'potato_menu' ? "Potato"
                                            : displayStyle.displayStyle === 'ragi_menu' ? "Ragi"
                                              : displayStyle.displayStyle === 'sunflower_menu' ? "Sunflower"
                                                : displayStyle.displayStyle === 'tur_menu' ? "Tur"
                                                  : ""}</h2>
                        <div>
                          <div className="grid-container-header">
                            {/* <div><input type="text" placeholder="Year : Month Week#" data-id="month" onChange={onInputChange} /></div> */}
                            <div>Year : Month Week#</div>
                            <div>Predicted Price(INR)/Quintal</div>
                            <div>Actual Price(INR)/Quintal</div>
                            <div>Percentage Difference</div>
                            <div><input type="text" placeholder="Year" data-id="year" onChange={onInputChange}  value={yearValue.yearValue}/></div>
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