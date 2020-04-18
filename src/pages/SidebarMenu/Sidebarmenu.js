import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = (props) => {
    
    let sidebar_menu_arr = ['Bajra', 'Blackgram', 'Copra', 'Greengram', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Potato', 'Ragi', 'Sunflower', 'Tur']; 

    return (
        <div>
            <div>
            {
                sidebar_menu_arr.map((item, i) => {
                    return (<div key={i} className="menu_item"><span onClick = {props.side.bind(this)} data-id={item}>{item}</span></div>)
                })
            }
            </div>
        </div>
    );
}

export default SidebarMenu;