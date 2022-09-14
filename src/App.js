import React from "react";
import Calculator from "./components/Calculator";

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Calculator/>
      </div>
    )
  }
}
