import React from "react";
import '../../App.css'

const Content = props => {
  const { className, children } = props
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Content