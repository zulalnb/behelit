import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const Button = ({ type, children }) => {
  const [btn, setBtn] = useState(null)

  useEffect(() => {
    if (type === 'dashed') {
      setBtn('btn-dashed')
    } else if (type === 'primary') {
      setBtn('btn-primary')
    } else if (type === 'text') {
      setBtn('btn-text')
    } else if (type === 'link') {
      setBtn('btn-link')
    }
  })

  return (
    <button type='button' className={`${styles['btn']} ${styles[btn]}`}>
      {children}
    </button>
  )
}
