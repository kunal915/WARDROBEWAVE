import JoditEditor from 'jodit-react';
import React, { useState, useRef } from 'react';

const ContentEditor = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    const backendEndpoint = 'http://localhost:5000/api/contents/createcontent';
    const requestData = {
      title: title, // Assuming you have `title` defined and set correctly in the component state
      content: content, // Assuming you have `content` defined and set correctly in the component state
    };
  
    fetch(backendEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Content could not be saved.');
        }
      })
      .then((data) => {
        if (data.success) {
          console.log('Content saved successfully!', data);
          alert('Content saved successfully!');
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.error('Error while saving content:', error);
        alert('Error while saving content: ' + error.message);
      });
  };
  

  return (
    <div>
      <h1>Welcome to Content Editor</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your title here"
      />
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <div>{content}</div>
      <button className='mt-4' onClick={handleSave}>
        Save Content
      </button>
    </div>
  );
};

export default ContentEditor;
