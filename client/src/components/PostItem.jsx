import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID,category, title, description, authorID, thumbnail}) => {
  const shortDescription = description.length > 120 ? description.substr(0,120) + '...':description;
  const postTitle = title.length > 120 ? title.substr(0,120) + '...':title;

  return (
    <article className='post'>
    <div className='post__thumbnail'>
      <img src={thumbnail} alt={title}/>
</div>
<div className='post__content'>
<Link to={`/posts/${postID}`}>
  <h3>{postTitle}</h3>
</Link>
<p>{shortDescription}</p>
<div className="post__footer">
  <PostAuthor/>
  <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
  </div>
  </div>
    </article>
  )
}

export default PostItem