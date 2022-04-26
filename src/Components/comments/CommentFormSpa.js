import React from 'react';


export function CommentFormSpa({
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
        placeholder="Aggrega tu comentario aqui" 
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
          placeholder='Tu nombre aqui'
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
          placeholder='Pais'
          required
        />
      </label>
      <br />
      <input type="submit" value="Mandar" id='submit'></input>
      </form>
  )
}