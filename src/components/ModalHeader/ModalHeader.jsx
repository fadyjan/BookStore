import React from 'react'
import module from './ModalHeader.module.css'
import {HandleHeader} from '../../utils/utilsFunctions'
const ModalHeader = ({selectedOption}) => {
  const HeaderTitle = HandleHeader(selectedOption)
  return (
    <label id={module.TittleBar}>Add New {HeaderTitle}</label>
  )
}

export default ModalHeader