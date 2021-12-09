import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// ReactDOM.render(
//   React.createElement("h1",{ style : {color : "purple" } },
//   React.createElement("h1",null, "Hi again!"),
//   React.createElement("h1",null, "Hi again!"),
//   React.createElement("h1",null, "Hi again!")
//   ),
//   document.getElementById('root')
// );

// let city = {
//   name : "Meerut",
//   Country : "India"
// };
// ReactDOM.render(
//   <h1 id="heading" className="cool-text">{city.name} is in {city.Country}</h1>,
//   document.getElementById('root')
// );

// function Hello(props) {
//   console.log(props);
//   return( <div>
//   <h1>Welcome to {props.Library}</h1>
//   <p>{props.message}</p>
//   <p>{props.number}</p>
//   </div>
//   )
// }
// ReactDOM.render(
//   <Hello
//    Library="React" 
//    message="Success!"
//    number={3} />,
//   document.getElementById("root")
// );

// function Lake(props){
//   return <h1>{props.name}</h1>;
// }
// function App() {
//   return (<div>
//     <Lake name="Mansarovar"/>
//     <Lake name="Mansarovar2"/>
//     <Lake name="Mansarovar3"/>
//   </div>);
// }
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// )

// const lakeList = [
//   "Tenant1",
//   "Tenant2",
//   "Tenant3"
// ];
// function App(props) {
//   return (
//     <ul>
//       {props.lakes.map(lake => (
//         <li>{lake}</li>
//       ))}
//     </ul>
//   )
// }
// ReactDOM.render(
//   <App lakes ={lakeList}/>,
//   document.getElementById("root")
// )

//Array Destructuring : -

// const snacks = [
//   "popcorn",
//   "maggie",
//   "Namkeen"
// ];
// console .log(snacks[0]);
// const [first,second,third]=[
//     "popcorn",
//     "maggie",
//     "Namkeen"
// ];
// console.log(first,second,third);

//using usestate
// import {useState} from "react";

// function App(){
//   const [status,setStatus] =useState("open");
//   return (
//     <div>
//       <h1>status: {status}</h1>
//       <button onClick={()=> setStatus("closed")}>Closed</button>
//       <button onClick={()=> setStatus("open")}>Open</button>
//       <button onClick={()=> setStatus("Back in 5 Min")}>Break</button>
//     </div>
//   )
// };
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

// import {useState} from "react";

// function App(){
//   const [year,setYear] =useState("2021");
//   const [Manager,setManager] =useState("Anjali");
//   const [status,setStatus] =useState("Open");
//   return (
//     <>
//     <div>
//       <h1>{year}</h1>
//       <button onClick={ ()=> setYear(year + 1)}
//       > New Year!</button>
//     </div>
//     <div>
//       <h1>Manager on Duty : {Manager}</h1>
//       <button onClick={() => setManager("Vasudha")}>New Manager</button>
//     </div>
//     <div>
//       <h1>status: {status}</h1>
//       <button onClick={()=> setStatus("closed")}>Closed</button>
//       <button onClick={()=> setStatus("open")}>Open</button>
//       <button onClick={()=> setStatus("Back in 5 Min")}>Break</button>
//     </div>
//     </>
//   )
// };
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );
import { useState, useEffect } from "react";
function Checkbox() {
  const [checked, setChecked] = useState(false);
  useEffect(()=> {
  alert('checked: ${checked.toString()}');
})

  return(
    <>
    <input type ="checkbox" value={checked}
    onChange={()=>
    setChecked(checked =>!checked)}/>
    {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
);
