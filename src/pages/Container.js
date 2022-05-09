import React from 'react'
import Main from './Main';
import GlobalModal from './GlobalModal';

const Container = () => {
  return (
    <div className="contents">
      <GlobalModal />
      <Main />
    </div>
  )
}

export default Container;