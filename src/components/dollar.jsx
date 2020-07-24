import React from 'react'

export default class Dollar extends React.Component{
  constructor(){
    super();
    this.state = {
      value:''
    }
  }

  handChange = e => {
    this.props.tte(e.target.value)
  }
  render(){
    return (
      <div>
        <input type="text" value={this.props.money*7} onChange={this.handChange}/>
      </div>
    )
  }
}