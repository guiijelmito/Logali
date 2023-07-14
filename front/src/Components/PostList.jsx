import React from 'react';
import Post from './Post';

import '../styles/PostList.css'

export default function PostList({ posts }) {
  return (
    <ul className='lista_post'>
      {posts.map(post => (
        <li key={post.id}>
          <Post post={{
            lugar: post.name,
            texto: post.description,
            likes: post.likes,
            hora: post.dataCriacao,
            comentarios: post.comments.length,
          }} />
        </li>
      ))}
    </ul>
  );
}