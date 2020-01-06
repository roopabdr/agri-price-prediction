import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import AboutAuthor from './pages/AboutAuthor/AboutAuthor';
import AboutPublishedBooks from './pages/AboutPublishedBooks/AboutPublishedBooks';
import Contact from './pages/Contact/Contact';
import SidebarMenu from './pages/SidebarMenu/Sidebarmenu';

import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from "mongodb-stitch-browser-sdk";

const App = () => {

  const [displayStyle, setDisplayStyle] = useState({
    'displayStyle': ''
  });

  const [commodity, setCommodity] = useState({
    'commodity': null
  });

  let commodityData = null;
  
  const _loadclient = (collectionName) => {
    // Initialize the App Client
    let client = null;

    // console.log(Stitch.hasAppClient("agri-stitch-srtgy"));
    if (Stitch.hasAppClient("agri-stitch-srtgy") === false) {
      client = Stitch.initializeDefaultAppClient("agri-stitch-srtgy");
    } else {
      client = Stitch.defaultAppClient;
    }

    const displayTable = () => {
      // Get a MongoDB Service Client
      // This is used for logging in and communicating with Stitch
      const mongodb = client.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
      );
      const db = mongodb.db("agricult");
      db
        .collection(collectionName)
        .find({}, { limit: 1000 })
        .asArray()
        .then(data => {
          commodityData = Object.assign(data);
          console.log('commodityData', commodityData.length);
          setCommodity({
            'commodity': commodityData
          })
        })
    }

    client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(displayTable)
      .catch(console.error);
  }

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
          : (event.currentTarget.dataset.id === 'Bajra 2019' ?
            setDisplayStyle({
              'displayStyle': 'bajra_menu'
            }) 
            : (event.currentTarget.dataset.id === 'Onion 2019' ?
            setDisplayStyle({
              'displayStyle': 'onion_menu'
            }) 
            : (event.currentTarget.dataset.id === 'Potato 2019' ?
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

      if(event.currentTarget.dataset.id === 'Bajra 2019') {
        _loadclient("bajra");
      } else if (event.currentTarget.dataset.id === 'Onion 2019') {
        _loadclient("onion");
      } else if (event.currentTarget.dataset.id === 'Potato 2019') {
        _loadclient("potato");
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
                        <h2>{displayStyle.displayStyle === 'bajra_menu' ? "Bajra 2019"
                        : displayStyle.displayStyle === 'onion_menu' ? "Onion 2019"
                        : displayStyle.displayStyle === 'potato_menu' ? "Potato 2019"
                        : ""}</h2>
                        <table>
                          <thead>
                            <tr>
                              <th>Year : 2019 Month Week#</th>
                              <th>Predicted Price(INR)/Quintal</th>
                              <th>Actual Price(INR)/Quintal</th>
                              <th>Percentage Difference</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                            commodity.commodity !== null ?
                            commodity.commodity.map((item, index) => {
                              return <tr key={'tr' + index}>
                                <td>{item["Year : 2019 Month Week#"]}</td>
                                <td>{item["Predicted Price(INR)/Quintal"]}</td>
                                <td>{item["Actual Price(INR)/Quintal"]}</td>
                                <td>{item["Percentage Difference"]}</td>
                              </tr>
                            }) 
                            : console.log('commodityData otherwise', commodity.commodity)
                            }</tbody>
                        </table>
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