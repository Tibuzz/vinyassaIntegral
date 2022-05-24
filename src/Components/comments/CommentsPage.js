import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Comments } from "./Comments";
import { CommentFormSpa } from "./CommentFormSpa";
import { CommentFormEng } from "./CommentFormEng";
import { CommentsTitulo } from "./CommentsTitulo";
import { CommentsTitle } from "./CommentsTitle";

export function CommentsPage({comments, addComment}) {

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(text, name, country);
    setText("");
    setName("");
    setCountry("");
  }

  return (
    <div className="comentarios" id='comentarios'>
      <Routes>
        <Route path='/' element={<CommentsTitulo />} />
        <Route path='/en' element={<CommentsTitle />} />
      </Routes>
      <Comments comments={comments} />
     { <Routes>
        <Route path='/' element={<CommentFormSpa
          text={text}
          setText={setText}
          name={name}
          setName={setName}
          country={country}
          setCountry={setCountry}
          handleSubmit={handleSubmit}
        />} />
        <Route path='/en' element={<CommentFormEng
          text={text}
          setText={setText}
          name={name}
          setName={setName}
          country={country}
          setCountry={setCountry}
          handleSubmit={handleSubmit}
        />} />
        </Routes>}
    </div>
  );
};