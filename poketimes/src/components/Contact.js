import React from 'react'
import { useNavigate } from 'react-router-dom';





export const Contact = (props) =>
{
    const navigate = useNavigate();

    setTimeout(() =>
    {
        navigate('/about')
    }, 2000);
    return (
        <div className='container'>
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempore dolor animi nesciunt repellendus obcaecati, iste doloribus delectus sit fugiat possimus architecto amet quas maiores natus beatae iure! Fugiat, voluptas?</p>
        </div>
    )
}
