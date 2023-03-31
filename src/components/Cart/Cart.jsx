import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cart = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch("fake.json")
            .then(res => res.json())
            .then((data) => setCarts(data));
    }, [])



    return (

        <div className='card-container'>
            {
                carts.map((cart) => (
                    <SingleCard cart={cart}></SingleCard>

                ))
            }
        </div>
    );
};

export default Cart;