import moment from 'moment/moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'moment/locale/ko';

import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

import { MdModeEdit, MdDelete } from 'react-icons/md';

export default function Note({ note }) {
    console.log(note.date.toDate());

    const dt = note.date.toDate();
    const date = moment(dt).format('YYYY년 MMMM Do hh:mm:ss');

    async function remove() {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            await deleteDoc(doc(db, 'notes', note.id));
        }
    }

    return (
        <li className="note">
            <h2>{note.title}</h2>
            <p>{note.detail}</p>
            <div className="bottom">
                <div className="date">{date}</div>
                <Link to={'/edit'} state={note}>
                    <MdModeEdit />
                </Link>

                <a onClick={remove}>
                    <MdDelete />
                </a>
            </div>
        </li>
    );
}
