import React from 'react'
import blogData from '../data/blog'
import Article from './Article'


export default function Articlelist() {
    const articleArray = blogData.posts.map(post =>{
        return(
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
        )
    })
  return (
    <div>
        <main>{articleArray}</main>
    </div>
  )
}
