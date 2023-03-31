import React from 'react';
import image from '../../assets/nizam2.png'
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl">Knowledge <span className='text-rose-700'>Cafe</span></a>
                </div>
                <div className="flex-none gap-2">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Assignment 08</a></li>
                        <li><a>Assignment 07</a></li>
                        <li><a>Assignment 06</a></li>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={image} />
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;