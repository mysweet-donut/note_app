import React from 'react'
import NoteList from './components/NoteList'
import Header from './components/Header'
import Write from './components/Write'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Edit from './components/Edit'

//import Hello from './Hello'

export default function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Header />

          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="/write" element={<Write />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </BrowserRouter>

    // <div className='container'>
    //   <h1 className='title'>hello react</h1>

    //   <Hello name={'Picaso'} age={20}/>
    //   <Hello name={'Alice'} age={12}/>
    //   <Hello name={'Jobs'} age={30}/>
    // </div>
  )
}
