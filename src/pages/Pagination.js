import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Pagination = ({state, handelPage}) => {

  let {page} = state;

  let left ,midel, right;


  left = [...Array(Number(page)<=2?3:1)].map((_,idx) => (
      <Link to={'/'+(idx+1)}
        onClick={()=>handelPage(idx + 1)}
        key={idx + 1}
        className={Number(page) === idx + 1 ? 'disable' : ''}
      >
        {idx + 1}
      </Link>
    ))

    right = [...Array(Number(page)>=9?3:1)].map((_,idx) => {
      let num = Number(page)>=9?8:10;
      return <Link to={'/'+(idx+ num)}
        onClick={()=>handelPage(idx + num)}
        key={idx + num}
        className={Number(page) === idx + num ? 'disable' : ''}
      >
        {idx + num}
      </Link>
    })

    midel = [...Array(Number(page)<=2||Number(page)>=9?1:3)].map((_,idx) => (
      <Link to={'/'+(idx + Number(page) - 1)}
        onClick={()=>handelPage(idx + Number(page) - 1)}
        key={idx + Number(page) - 1}
        className={Number(page) === idx + Number(page) - 1 ? 'disable' : ''}
      >
        {idx + Number(page) - 1}
      </Link>
    ))


  return (
    <Paginations>
      {left}
      {Number(page) >= 3 && Number(page) <= 8 && <>...</>}
      {Number(page) >= 3 && Number(page) <= 8 && midel}
      ...
      {right}
    </Paginations>
  )
}

export default Pagination

const Paginations = styled.div`
  padding: 2rem 4rem 0;
  .disabled{
    cursor: not-allowed;
    background: #3f3f3f;
    color: white;
  }
  a{
    font-size: 1rem;
    font-weight: bold;
    color: black;
    margin: .5rem;
    display: inline-block;
    width: 1.2rem;
    border-radius: 2px;
    text-decoration: none;
    border: 1px solid gray;
    padding: .3rem;
    text-align: center;
    :active{
      background: blue;
      color: white;
    }
  }
  .disable{
    cursor: not-allowed;
    color: white;
    border: #3fde3f solid 1px;
    background: #3fde3f;
  }
`