import React from 'react'

export default class MyNav extends React.Component{
  render(){
    console.log(this.props.a);
    
    return(
      <div>
        <ul>
          {
            this.props.nav.map( (item) => {
            return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}