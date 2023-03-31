import React, { useEffect, useState } from 'react';

const SideCart = ({ readTime }) => {
    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem('readTime');

        setTime(getReadTimeFromStorage);

    }, [readTime])
    return (
        <div>
            <div className='w-[411px] h-[80px] bg-[#EFEDFD] rounded-xl'>
                <h1 className='text-[#6047EC] text-2xl pt-5'>Spent time on read : {time} min</h1>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Bookmarked Blogs : 00</h1>


            </div>
        </div>
    );
};

export default SideCart;