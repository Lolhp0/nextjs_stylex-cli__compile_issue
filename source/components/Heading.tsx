import React from 'react'
import * as stylex from '@stylexjs/stylex';

const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <h1 {...stylex.props(styles.text)}>{children}</h1>
  )
}

const styles = stylex.create({
    text: {
        fontSize: "3rem",
        lineHeight: 1.5,
        color: "#000",
        fontWeight: 800
    }
})

export default Heading