import React, { Component } from 'react';
import './worls.scss'
function SearchBox({changer}){

    return(

<div className="searchdiv"><form className="search-container">
    <div>
<input type="text" className="search-bar" placeholder="Search...." onChange={changer}/>
<img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></img>
</div>
</form></div>


    )


}
export default SearchBox;