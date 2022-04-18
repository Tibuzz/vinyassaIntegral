import './AddComment.css';


export function AddComment() {
  return (
    <div className='addComment'>
      <textarea placeholder="Aggrega tu comentario aqui" id='textarea'></textarea>
      <input type="submit" value="Mandar" id='submit'></input>
    </div>
  )
}