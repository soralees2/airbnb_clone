import React from 'react'
import Main from './Main';
import { Route, Routes } from "react-router-dom";

import Experience from './Experience';

const Container = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
      </Routes>
    </>
  )
}

export default Container;