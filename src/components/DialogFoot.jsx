import React from 'react'
import { useState } from 'react'
import './index.css';
import classNames from 'classnames';
import { useEffect } from 'react';

const Dialog = ({left,center,right}) => {
  const [cnt,setCnt] = useState(1);
  useEffect(() => {
    // console.log(styles['dialog']);d
    
  },[])
  return(
    <div className={"dialog"}>
      <div className="left">
        {left()}
        <span className="center-line"></span>
      </div>
      <div className="center">
        {center()}
      </div>
      <div className="right">
        <span className="center-line"></span>
        {right()}
      </div>
    </div>
  )
}

export default Dialog;