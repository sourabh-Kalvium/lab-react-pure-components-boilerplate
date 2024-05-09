import React, { Component, PureComponent} from 'react'

export default class PureCounterComponent extends PureComponent {
   constructor(props){
    super(props);
    this.state={
        count:0,
        toggle:false
    }
   }

   
   handleToggle=()=>(
    this.setState({
        toggle:this.state.toggle===false?true:false
    })
   )

   handleCounter=()=>{
    if(this.state.toggle){
        this.setState({
            count:this.state.count+1
        })
    }
    else{
      this.setState({
        value:this.state.value
      })
    }
    }


  render() {
    console.log("This is Pure Component")
    return (
      <div>
        <h4>Pure component</h4>
         <h4>{this.state.count}</h4>
         <button onClick={this.handleToggle}>toggle</button>
         <button onClick={this.handleCounter}>Counter</button>
      </div>
    )
  }
}
