/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import { data } from '../utils/posts'

const Post = ({match}) => {

  const pageNumber = match.params.id || 1;
  const [state, setstate] = useState({
    posts: [],
    loading: false,
    error: false,
    page: pageNumber,
    pages: 1,
    count: 50
  });


  const fetchPosts = async () => {
    setstate(prev=>({...prev, loading: true}));
    
      const post = data.slice((Number(state.page-1)) * 10, Number(state.page) * 10)
      console.log('success fetch data')
      setstate(prev=>({...prev, loading: false, posts: post}))

    }

  useEffect(() => {
    fetchPosts();

  }, [state.post]);

  let handelPage = (changePage) => {
    setstate(prev=> ({...prev, page : changePage}));
  }

  let {posts, loading} = state;

return (
    <>
      {
      loading ?
        <div style={{fontSize: '2rem', width: '20rem'}}> waiting get posts</div>
        :
        <>
        <Pagination state={state} handelPage={handelPage} />
        <Container>
          {
          posts.length>0 && posts.map(item=>(
            <div className='post' key={item._id}>
              <h2>{item.title}</h2>
              <h3>{item.author}</h3>
              <p>{item.body}</p>
            </div>
          ))
          }
        </Container>
        <Pagination state={state} handelPage={handelPage} />
        </>
    }
    </>
  )
}

export default Post

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  .post{
    width: 11rem;
    padding: .5rem 1rem;
    margin: 1rem;
    border-radius: 3px;
    box-shadow: 1px 1px 5px green;
  }
`
