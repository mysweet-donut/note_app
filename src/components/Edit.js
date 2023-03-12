import React from 'react';
import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

export default function Edit() {
    const navigate = useNavigate();
    const titleRef = useRef();
    const detailRef = useRef();
    const note = useLocation().state;

    console.log(note);

    async function edit(e) {
        e.preventDefault();
        const noteRef = doc(db, 'notes', note.id);

        await updateDoc(noteRef, {
            title: titleRef.current.value,
            detail: detailRef.current.value,
        });
        navigate('/');
    }

    function goBack(e) {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="container">
            <h2>노트 수정</h2>

            <form>
                <div>
                    <label>제목</label>
                    <input
                        type="text"
                        placeholder="제목..."
                        ref={titleRef}
                        defaultValue={note.title}
                    />
                </div>
                <div>
                    <label>내용</label>
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="내용..."
                        ref={detailRef}
                        defaultValue={note.detail}
                    ></textarea>
                </div>
                <div>
                    <button onClick={goBack}>취소하기</button>
                    <button onClick={edit}>수정하기</button>
                </div>
            </form>
        </div>
    );
}
