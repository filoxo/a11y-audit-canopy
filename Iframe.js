import React from 'react'

const Iframe = ({style, ...props}) => {
  const styles = {
    border: '2px solid darkgray',
    borderRadius: 4,
    width: '20vw',
    minWidth: 300,
    height: '15vh',
    minHeight: 250,
    ...style
  }
  return <iframe style={styles} {...props}></iframe>
}
export default Iframe