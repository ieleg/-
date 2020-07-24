import React from 'react'

export default class KeyDemo extends React.Component {
  constructor(){
    super();
    this.state = {
      userInfo :[
        {
          name:'li',
          age:18,
          sex:'男'
        },
        {
          name:'l3i',
          age:128,
          sex:'男'
        },
        {
          name:'rli',
          age:138,
          sex:'男'
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <ul>
          {
            this.state.userInfo.map((item) => {
              return (
                <li key={item.name}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}