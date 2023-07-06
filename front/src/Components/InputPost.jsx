import React, { useState } from 'react';
import InputForm from './InputForm';
import '../styles/InputPost.css';

export default function PostEntry() {
  const [showInputForm, setShowInputForm] = useState(false);

  const handleClick = () => {
    setShowInputForm(true);
  };

  return (
    <div>
      <form className='share' action="#" method="get"> 
        {!showInputForm ? (
          <button className='button-post'onClick={handleClick}>Clique para adicionar um post</button>
        ) : (
          <InputForm />
        )}
      </form>
    </div>
  );
}

