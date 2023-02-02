import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import "./Comments.css"

const CreateComment = () => {
  const { addComment } = useContext(fanficContext);
  const { id } = useParams()
  const [text, setText] = useState("")

  const handleCreateComment = () => {
    let newComment = new FormData();
    newComment.append("text", text);
    addComment(newComment, id);
    setText("")
  }

  return (
    <div>
      <div>

        {/* Create comment */}
        <input  className="inp-addComment" maxlength="255" type="text" placeholder='comment' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='btn-addComment' onClick={() => handleCreateComment()}>Добавить комментарий</button>
        {/* Create comment */}
      </div>
    </div>
  )
}

export default CreateComment