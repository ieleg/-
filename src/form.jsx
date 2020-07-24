import React from 'react'

export default class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      value: "",
    }

  }
  handSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
    
  }
  handChange(e){
    this.setState({
      value : e.target.value
    })
  }
  render(){
    return(
      <div>
        <form onSubmit = {this.handSubmit}>
          <input type="text" value={this.state.value} onChange = {this.handChange.bind(this)}/>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}