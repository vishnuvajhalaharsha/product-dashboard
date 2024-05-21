import React from 'react'
import { Chip } from '@mui/material'


export const Tag=(props)=>{
  return (<>
  <Chip key={props.key} label={props.tag} variant={props.variant} />
  </>)
}
export default Tag