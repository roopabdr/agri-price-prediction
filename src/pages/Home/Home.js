import React from 'react';
import './Home.css';

const Home = (props) => {
    return (
        <div className="home">
            <p>Agricultural Price Prediction / Agricultural Price Forecasting – website is publishing the predicted price data or future price
                data (agricultural price forecasting) of Agricultural commodities for state of Karnataka in India.
                We are using the data provided by <a rel="noopener noreferrer" href="http://agmarknet.nic.in/agmarknetweb/" target="_blank">AGMARKNET.NIC.IN</a> as a reference source to predict the future prices of Agricultural commodities.
                The contents published here are based on methodologies developed by Dr Narasimhan Madihally Krishna Iyengar.
            </p>
            <p>As a service to the nation, we are publishing the data free of cost for the users.
                We expect the same from the users of these data not to generate revenue out of this.
                In other words, users are not supposed to sell these data to the needy.
            </p>

            <p>Currently, we are publishing the predicted prices or forecast prices around 2 months in advance
                ( prices of 2 months in future ) for 13 commodities namely – Paddy(Dhan), Jowar(Sorgham), Maize, Ragi, Bajra, Arhar(Tur),
                Blackgram(Urad Beans), Greengram(Moong), Groundnut, Sunflower, Copra, Onion, Potato for State of Karnataka.
                The current work can be extended to many other commodities and even specific to particular markets.
            </p>
        </div>
    );
}

export default Home;