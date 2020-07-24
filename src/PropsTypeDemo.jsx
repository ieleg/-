import React from 'react'
import PropTypes from 'prop-types';

export default class PropsTypeDemo extends React.Component{
  render(){
    return(
      <div>
        1234567890:{this.props.title}
      </div>
    )
  }

}
PropsTypeDemo.propTypes = {
  title: PropTypes.string
}