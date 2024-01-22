import React, { useState } from 'react'
import PostItem from './PostItem'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'

const DUMMY__POSTS =[
  {
    id: '1',
    Thumbnail: Thumbnail1,
    category: 'education',
    title: 'This is the title of the very first post in this blog',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, inventore atque illum vel corporis quia ipsum quo laboriosam culpa impedit?",
    authorID: 3
  },
  {
    id: '2',
    Thumbnail: Thumbnail2,
    category: 'science',
    title: 'This is the title of the very first post in this blog',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, inventore atque illum vel corporis quia ipsum quo laboriosam culpa impedit?",
    authorID: 1
  },
  {
    id: '3',
    Thumbnail: Thumbnail3,
    category: 'weather',
    title: 'This is the title of the very first post in this blog',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, inventore atque illum vel corporis quia ipsum quo laboriosam culpa impedit?",
    authorID: 13
  },
  {
    id: '4',
    Thumbnail: Thumbnail4,
    category: 'farming',
    title: 'This is the title of the very first post in this blog',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, inventore atque illum vel corporis quia ipsum quo laboriosam culpa impedit?",
    authorID: 11
  },

]


const Posts = () => {
  const [posts, setPosts] = useState(DUMMY__POSTS)
  return (
   <section className='posts'>
    {
      posts.map(({id, thumbnail, category, title, description, authorID}) =>
       <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} 
       description={description} authorID={authorID}/>)
    }
   </section>
  )
}

export default Posts