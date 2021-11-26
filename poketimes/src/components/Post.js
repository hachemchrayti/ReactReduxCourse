import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import axios from 'axios/'

export default function Post()
{
    let params = useParams()
    const [post, setPost] = useState(null) //this.props.match.params.post_id;
    useEffect(() =>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + params.post_id)
            .then(res =>
            {
                console.log(res.data)
                setPost(res.data)
            })
        return () =>
        {

        }
    }, [])

    const posData = post ?
        (
            <div className='center'>
                <h4 className='center'>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ) : (
            <div className='center'>Loading post..</div>
        )
    return (
        <div className='container'>
            <h4>{params.post_id}</h4>
            {posData}
        </div>
    )
}

