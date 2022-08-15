import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import '../../App.css'

const TopLink = props => {
  const { className } = props
  return (
    <div className={className}>
      <FontAwesomeIcon icon={faLink} className="icon"/>
    </div>
  )
}

export default TopLink