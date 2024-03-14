

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);
  const handleAddBookmark=(blog)=>{
    // console.log("bookmark adding soon")
    // console.log(blog)
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks)
  }
  const handleMarkAsRead =(id, time) =>{
// console.log('marking as read',time)

const newReadingTime= readingTime + time;
setReadingTime(newReadingTime);

const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !== id);
setBookmarks(remainingBookmarks)
   
  }
 

  return (
    <>
     <Header></Header> 
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks}
    readingTime={readingTime}></Bookmarks>
    </div>
      
     
    </>
  )
}

export default App
