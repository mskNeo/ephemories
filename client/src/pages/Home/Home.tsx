import React from 'react';
import { Header } from 'components/Header';

// NOTE: make ephemories inline blocks with auto width and height so they can all fit with each other

export default function Home() {
  return (
    <div className='container flex'>
      <Header />
    </div>
  )
}
