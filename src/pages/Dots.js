/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Dots = ({state, children, handelPage}) => {

  const {page, count} = state 

  const [show, setSecroll] = useState('none')

  const right = count/5

  const lenLeft = page == right - 2 ? right - 5 : page > right - 3 ? right - 4 : page > 3 ? page - 3 : 0
  const lenRight = page < 3 ? right - 4 : page < right - 2 ? right - page -2 : 0 
  
  const pageLeft = page > 3 ? 2 : 0
  const pageRight = page < right -2 ? right - lenRight : page - 1 

  console.log(lenLeft)

  
  const dropLeft = [...Array(lenLeft)].map((_,idx) => {
    return(
    <Link onClick={()=>handelPage(pageLeft  + idx )} to={'/'+ Number(Number(pageLeft)  + idx)} key={idx}>
      {pageLeft  + idx }
    </Link >
    )
  })

  const dropRight = [...Array(lenRight)].map((_,idx) => {
    return(
    <Link onClick={()=>handelPage(pageRight + idx )} to={'/'+ Number(Number(pageRight) + idx)} key={idx}>
      {pageRight + idx }
    </Link >
    )
  })

  return (
    <Container>

      {
        page > 3 && <span onClick={() => setSecroll(show === 'left' ? 'none' : 'left')}>
        ...
        </span>
      }

      {
        page > 3 && show === 'left' && <div className='left'>{dropLeft}</div>
      }

      {children}

      {
      page < 8 && <span onClick={() => setSecroll(show === 'right' ? 'none' : 'right')}>
      ...
      </span>
      }
      
      {
        page < 8 && show === 'right' && dropRight
      }
        

    </Container>
  )
}

const Container = styled.span`
    display: inline-block;
    position:relative;
    font-size: 12px;
    height: 20px;
    span{
      fon-size: 1rem;
      cursor:pointer;
    }
  .left{
    a{
      background: red;
      border: none;
      font-size: 10px;
      z-index: 11;
    }
    position:absolute;
    display: flex;
    flex-direction: column;
    z-index:9;
    top: -120px;
    overflow: scroll;
    scroll-behavior: smooth;
    height: 80px;
  }
  .right{
    display: flex;
    flex-direction: column;
    z-index:9;
    bottom:120px;
    overflow: scroll;
    scroll-behavior: smooth;
    height: 80px;
  }
`

export default Dots