import React from 'react'
import { useRef } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

export default function Edit() {
    const navigate = useNavigate()
    const titleRef = useRef()
    const detailRef = useRef()
    const note = useLocation().state

    console.log(note);

  return (
    <div className="container">
      <h2>노트 수정</h2>
      
      <form>
        <div>
          <label>제목</label>
          <input type="text" placeholder="제목..." ref={titleRef} defaultValue={`aaa`}/>
        </div>
        <div>
            <label>내용</label>
            <textarea cols="30" rows="10" placeholder="내용..." ref={detailRef} defaultValue={`aaa`}></textarea>
        </div>
        <div>
            <button>취소하기</button>
            <button>수정하기</button>
        </div>
      </form>
    </div>
  )
}

