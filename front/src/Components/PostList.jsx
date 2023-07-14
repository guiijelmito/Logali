import React from 'react';
import Post from './Post';

export default function PostList({ posts }) {
  return (
    <ul>
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