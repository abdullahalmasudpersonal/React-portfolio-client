import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/api/v1/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    return (
        <div className='allblogs-bg py-5'>
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        blogs.map(blog =><Blog key={blog._id} blog={blog} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;