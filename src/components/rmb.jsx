import React from 'react'

export default class RMB extends React.Component{
  constructor(props){
    super(props);
  }
  handChange (e) {
    this.props.te(e.target.value)
  }

  
  render(){
    return (
      <div>
        <input type="text" value={this.props.money} onChange={this.handChange.bind(this)}/>
      </div>
    )
  }
}