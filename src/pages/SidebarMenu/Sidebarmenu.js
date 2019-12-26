import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = () => {
    let sidebar_menu_arr = ['Bajra 2019', 'Onion 2019', 'Potato 2019']
    return (
        <div>
            {
                sidebar_menu_arr.map((item, i) => {
                    return (<div key={i} className="menu_item"><span>{item}</span></div>)
                })
            }
        </div>
    );
}

export default SidebarMenu;