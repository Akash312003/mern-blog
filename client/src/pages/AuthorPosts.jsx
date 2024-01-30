import React, { useState } from 'react'
import { DUMMY__POSTS } from '../data'
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
  const [posts , setPosts] = useState(DUMMY__POSTS)

  return (
    <section className='posts'>
    {posts.length > 0? <div className="container posts__container">
    {
      posts.map(({id, thumbnail, category, title,desc, authorID}) =>
       <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} 
       description={desc} authorID={authorID}/>)
    }
    </div> : <h2 className='center'>No posts founds</h2>}
   </section>
  )
}

export default AuthorPosts