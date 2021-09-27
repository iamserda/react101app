import React from "react";
import "./App.css"

function TrendingList(props) {
  // const [state, setState] = React.useState([]);

  const myNewList = props.text.map(
    (eachItem, index) => {
      return <li 
      key={index} 
      id={index} 
      onClick={(event)=>{props.click(event)}}>
        {eachItem}</li>
    })

  return <ul>{myNewList}</ul>;
}

function App(props) {
  const handleClick = (event) => {
    alert(`clicked: ${event.target.textContent}`);
  };
  return (
    <div>
      {props.children}
      <TrendingList click={handleClick} text={["A", "B", "C", "D"]} />
    </div>
  );
}

export default App;
