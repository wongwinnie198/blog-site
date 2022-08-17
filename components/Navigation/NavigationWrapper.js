import React from 'react'
import styles from './Navigation.module.scss';

const NavigationWrapper = ({children}) => {
  return (
    <div className={styles.navigationContainer}>{children}</div>
  )
}

export default NavigationWrapper