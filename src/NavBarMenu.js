import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";


const Restaurant = () => {
    const[menuData, setManuData] = useState(Menu);  
    const filterItem = (category) =>{
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setManuData(updatedList);
    };

/*props*/
    return (
        <>    
        {/* <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div> */}
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={() => filterItem("tshirt")}>T-shirts</button>
                <button className='btn-group__item' onClick={() => filterItem("badges")}>Badges</button>
                <button className='btn-group__item' onClick={() => filterItem("graphic designing")}>Graphic Designig</button>
                <button className='btn-group__item' onClick={() => filterItem("posters")}>Posters</button>
                <button className='btn-group__item' onClick={() => setManuData(Menu)}>All</button>
            </div>
        </nav>
        <MenuCard menuData={menuData}/>
        </>
    );
};

export default Restaurant;