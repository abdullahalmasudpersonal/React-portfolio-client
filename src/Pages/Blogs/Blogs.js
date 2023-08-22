import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../AllBlogs/Blog';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div id='blogs' className='blogs-bg'>
            <div className='pt-3'>
                <h3 className='text-center pt-5 mt-5 mb-5 numbers-numbers-headline'>BLOGS</h3>
                <div className='container mt-5 pt-5'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            blogs.slice(0, 3).map(blog => <Blog key={blog._id} blog={blog} />)
                        }
                    </div>
                    <div className='blogs-see-all-btn'>
                        <Link to='/allblogs'>
                            <button >
                                See All Blogs
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;