import React, { useState } from 'react';
import Menu from "./Component/Basics/menuApi.js";
import MenuCard from './Component/Basics/MenuCard.js';
import "./Component/Basics/Style.css";




const Data = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            setFilteredData(Menu);
        } else {
            const filteredResults = Menu.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.Location.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (filteredResults.length === 0) {
                window.alert("No results found for your input.");
            }
            setFilteredData(filteredResults);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <div className="container0">
                    <div className="input-group">
                        <label className="input-group__label" htmlFor="myInput">Enter City</label>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            id="myInput"
                            className="input-group__input"
                        />
                        <button onClick={handleSearch} className='glowing-btn'>
                            Search
                        </button>
                    </div>
                </div>

                <MenuCard menuData={filteredData.length > 0 ? filteredData : Menu} />
            </nav>
        </>
    )
}

export default Data;