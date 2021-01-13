import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './Comment.js';
import reportWebVitals from './reportWebVitals';


const post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this dino blog's cool information about the best dinosaurs in the world!",
  comments: [
    "First!", 
    "Great post", 
    "Hire this author now!"
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App
      title={post.title}
      author={post.author}
      body={post.body}
    />
    <Comment 
      comments={post.comments}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
