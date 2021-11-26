import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios/'
import { Link } from 'react-router-dom';
export const Home = (props) =>
{

    const [posts, setPosts] = useState([])
    useEffect(() =>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>
            {
                setPosts(res.data.slice(0, 10))
            })
        return () =>
        {

        }
    }, [])

    const poststList = posts.length ?
        (
            posts.map(p =>
            {
                return (
                    <div className='post card' key={p.id}>
                        <div className='card-content'>
                            <Link to={'posts/' + p.id}>
                                <span className='card-title'>
                                    {p.title}
                                </span>
                            </Link>
                            <p>{p.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='center'>No Posts yet...</div >
        )
    return (
        <div className='container'>
            <h4 className="center">Home</h4>
            {poststList}
        </div>
    )
}
