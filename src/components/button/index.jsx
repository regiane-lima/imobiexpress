import React from 'react'
import { Container } from './styles'

export default function button({props, children}) {
  return (
    <Container{...props}>
  {children}    
    </Container>
  )
}
