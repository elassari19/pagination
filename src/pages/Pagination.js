/* eslint-disable eqeqeq */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Dots from './Dots';
import LinkRoute from './LinkRoute';

const Pagination = ({state, handelPage}) => {

  let {page} = state;

  let midel = [...Array(Number(page)<=2||Number(page)>=9?2:3)].map((_,idx) => (
      
    Number(page) == 1
    ? <LinkRoute handelPage={handelPage} pageNumber={Number(page) + 1 + idx} page={page} /> 
    
    :Number(page) == 2
    ? <LinkRoute handelPage={handelPage} pageNumber={Number(page) + idx}     page={page} /> 
      
    :Number(page) == 10
    ? <LinkRoute handelPage={handelPage} pageNumber={Number(page) + idx - 2} page={page} />  
    
    :Number(page) == 9
    ? <LinkRoute handelPage={handelPage} pageNumber={Number(page) + idx - 1} page={page} />

    : <LinkRoute handelPage={handelPage} pageNumber={Number(page) + idx - 1} page={page} />

    ))


  return (
    <Paginations>

      <LinkRoute handelPage={handelPage} pageNumber={1} page={page} />

      <Dots state={state} handelPage={handelPage}>
        { midel}
      </Dots>

      <LinkRoute handelPage={handelPage} pageNumber={10} page={page} />

    </Paginations>
  )
}

export default Pagination

const Paginations = styled.div`
  padding: 2rem 4rem 0;
  display:flex;
  flex-direction:row;
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
    height:20px;
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