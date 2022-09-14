import React from "react";
export default class Calculator extends React.Component{
    constructor(props){
        super(props)
    }

render(){
    return(
    <div className="cal-grid">
      <button type="button" className="workspace" >0</button>
      <button type="button" className="cal-Btn">A/C</button>
      <button type="button" className="cal-Btn">+/-</button>
      <button type="button" className="cal-Btn">%</button>
      <button type="button" className="cal-Btn operator">÷ </button>
      <button type="button" className="cal-Btn">7</button>
      <button type="button" className="cal-Btn">8</button>
      <button type="button" className="cal-Btn">9</button>
      <button type="button" className="cal-Btn operator">×</button>
      <button type="button" className="cal-Btn">4</button>
      <button type="button" className="cal-Btn">5</button>
      <button type="button" className="cal-Btn">6</button>
      <button type="button" className="cal-Btn operator">-</button>
      <button type="button" className="cal-Btn">1</button>
      <button type="button" className="cal-Btn">2</button>
      <button type="button" className="cal-Btn">3</button>
      <button type="button" className="cal-Btn operator">+</button>
      <button type="button" className="cal-Btn">0</button>
      <button type="button" className="cal-Btn">.</button>
      <button type="button" className="cal-Btn operator">=</button>
    </div>   

    )
}
}