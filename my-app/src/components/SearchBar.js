import React from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
function SearchBar({placeholder,data}){
return (
    <div className="search">
        <div className="searchinputs"></div>
        <div className="dataresults"></div>
        <input type="text" placeholder={placeholder}></input>
        <div className="searchicon">
            <SearchIcon />
        </div>
    </div>
)
};
export default SearchBar;