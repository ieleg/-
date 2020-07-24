import React from 'react'
import { useState } from 'react'
import styles from './index.scss';
import classNames from 'classnames';

const Dialog = ({left,center,right}) => {
  const [cnt,setCnt] = useState(1);
  return(
    <div className={`${styles.dialog-container}`}>
      {left()}
      {center()}
      {right()}
    </div>
  )
}

export default Dialog;