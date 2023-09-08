// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="link">
        <div className="container">
          <img src={imageUrl} className="image" alt={`item${id}`} />
          <div className="information">
            <p className="topic"> {topic} </p>
            <h1 className="heading"> {title} </h1>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="name"> {author} </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
