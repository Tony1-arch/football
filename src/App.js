
import './App.css';

import React, { useState } from "react";
import Clubs from "./Clubs";
import Catagories from "./Catagories";
import footballclubs from "./data";

const allCatagories = [...new Set(footballclubs.map((footballclub) => footballclub.catagory))];
allCatagories.push('AllClubs')
console.log(allCatagories)

function App() {
  const [clubs, setClubs] = useState(footballclubs);
  const [catagories, setCatagories] = useState(allCatagories);
   
  const filterItems = (catagory) => {
    // accesing all items in the array using a string we pushed in the array of categories
    if (catagory === "AllClubs") {
  
      setClubs(footballclubs)
      return;
      
    }
    // accessing items according to their category
    const filteredClubs = footballclubs.filter((footballclub) => footballclub.catagory === catagory);
    setClubs(filteredClubs);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src="https://th.bing.com/th?q=Classic+Football&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-XA&cc=AE&setlang=en&adlt=strict&t=1&mw=247" 
          alt="football"  className="logo"/>
          <h2> Clubs</h2>
          <div className="underline"></div>
        </div>
        <Catagories catagories={catagories} filterItems={filterItems} />
        <Clubs allclubs={clubs} />
      </section>
    </main>
  );
}

export default App;
