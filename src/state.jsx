import React from 'react'

export default class State extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cnt : 0,
      flag : true
    }
  }
  delay(times){
    return new Promise( (reslove,reject) => {
      setTimeout(reslove, 1000*times);
    })
  }
  plus(){
      this.setState({
        cnt:this.state.cnt+1
      },()=>{
        console.log(this.state.cnt);
      })
      
      
    
  }
  minus(){
    if(this.state.flag){
      this.setState({
        flag : 0
      })
      this.delay(3).then(()=>{
        this.setState({
          cnt:this.state.cnt-1,
          flag : 1
        })
      })
    }

  }
  componentWillUnmount(){
    console.log("组件销毁");
    
  }
  componentDidUpdate(){
    console.log('更新了');
    
  }
  componentDidMount(){
    console.log("挂载完成");
      
  }
  render(){
    return(
      <div>
        <p>组件的state</p>
        <span onClick={this.plus.bind(this)}>+</span>
        <p>{this.state.cnt}</p> 
        <span onClick={this.minus.bind(this)}>-</span>

      </div>
    )
  }
}