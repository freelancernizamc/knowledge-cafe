import React from "react";

const SingleCard = ({ cart }) => {

  console.log(cart);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img src={cart.blogCoverImage} alt="Blog" /></figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img className="w-[25px] rounded-full" src={cart.authorImage} alt="author" />
            <div className="flex gap-2">
              <h4 className='font-bold'>{cart.authorName}</h4>
              <p>{cart.publishDate}</p>
            </div>
          </div>
          <div className="flex">
            <p>{cart.readTime}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>

          </div>
        </div>
        <h1 className="card-title font-bold">
          {cart.blogTitle}

        </h1>
        <div className='text-left gap-2'>
          <p>#beginners #programming</p>
          <a className="underline text-[#6047EC]" href='#'>Mark as Read</a>
        </div>

      </div>
    </div>
  );
};

export default SingleCard;
