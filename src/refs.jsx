import React from 'react'

export default class Refs extends React.Component{
  constructor(){
    super();
    this.Hello = React.createRef();
  }
  componentDidMount(){
    console.log(this.Hello.current);
    
  }
  render(){
    
    return(
      <div>
        <p ref={this.Hello}>hello</p>
        
      </div>
    )
  }
}