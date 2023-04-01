import React from "react";
import Swal from 'sweetalert2'

const SingleCard = ({ cart, handleReadTime, handleBookmark }) => {
  const handleBookmarkClick = (blogTitle, id) => {
    const previousBookMark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark = [];
    const cart = { blogTitle, id, bookmark: true };
    if (previousBookMark) {
      const isThisCartMarked = previousBookMark.find((cart) => cart.id == id);
      if (isThisCartMarked) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You Have Already Bookmarked This Blog',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      } else {
        bookmark.push(...previousBookMark, cart);
        localStorage.setItem('bookmark', JSON.stringify(bookmark));
        // console.log(bookmark);
        handleBookmark(bookmark);
      }
    } else {
      bookmark.push(cart);
      localStorage.setItem('bookmark', JSON.stringify(bookmark));
      handleBookmark(bookmark);
    }
  };

  // console.log(cart);
  return (
    <div className="card md:w-full bg-base-100 shadow-xl">
      <figure><img src={cart.blogCoverImage} alt="Blog" /></figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="md:flex items-center gap-1">
            <img className="w-[25px] rounded-full" src={cart.authorImage} alt="author" />
            <div className="md:flex gap-2">
              <h4 className='font-bold'>{cart.authorName}</h4>
              <p>{cart.publishDate}</p>
            </div>
          </div>
          <div className="md:flex">
            <p>{cart.readTime} min Read</p>
            <svg onClick={() => handleBookmarkClick(cart.blogTitle, cart.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>

          </div>
        </div>
        <h1 className="card-title font-bold text-3xl text-left">
          {cart.blogTitle}

        </h1>
        <div className='text-left gap-2'>
          <p>#beginners #programming</p>
          <h4 onClick={() => handleReadTime(cart.readTime)} className="underline cursor-pointer text-[#6047EC]">Mark as Read</h4>
        </div>

      </div>
    </div>
  );
};



export default SingleCard;
