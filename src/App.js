import React from "react";
import "./style.css";

export default class App extends React.Component{
render(){

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input 
          type = "checkbox"
          
          onClick = {console.log("Clicked")}
           />
      
    </div>
  )

}
}

