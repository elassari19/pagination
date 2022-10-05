import React from 'react'
import { Link } from 'react-router-dom'

const LinkRoute = ({page, pageNumber, handelPage}) => {
  return (
    <Link to={'/' + (pageNumber)}
      onClick={()=>handelPage(pageNumber)}
      key={pageNumber}
      className={Number(page) === pageNumber && 'disable'}
    > 
      {pageNumber}
    </Link>
  )
}

export default LinkRoute