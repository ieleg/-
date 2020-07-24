import React from 'react'
import RMB from './rmb'
import Dollar from './dollar'

export default class Parent extends React.Component{
  constructor(){
    super();
    this.state = {
      money : 1,
    }
  }
  change(e){
    this.setState({
      money: parseInt(e)
    },()=>{
      console.log(this.state.money);
      
    })
  }
  change2(e){
    this.setState({
      money:Math.floor((+e))/7
    })
  }
  render(){
    return(
      <div>
        <p>美元:</p>
        <Dollar money={this.state.money} tte={this.change2.bind(this)}></Dollar>
        <p >人民币:</p>
        <RMB money={this.state.money} te={this.change.bind(this)}></RMB>
      </div>
    )
  }
}