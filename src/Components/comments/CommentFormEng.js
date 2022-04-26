import React from 'react';


export function CommentFormEng({
  text,
  setText,
  name,
  setName,
  country,
  setCountry,
  handleSubmit
}) {

  return (

    <form onSubmit={handleSubmit} >
      <textarea
        className='textarea'
        placeholder="Your comment here"
        name='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required>
      </textarea>
      <br />
      <label>
        <input
          className='input'
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Your name here'
          required
        />
      </label>
      <br />
      <label>
        <input
          className='input'
          type='text'
          name='country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder='Your country'
          required
        />
      </label>
      <br />
      <input type="submit" value="Send" id='submit'></input>
    </form>
  )
}