import { useState, useEffect } from 'react';
import Blog from '../blog/Blog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className='grid grid-cols-12 gap-6 w-11/12 mx-auto' >
            <div className='col-span-7 md:col-span-8 flex flex-col gap-10  '>
                
                {
                    blogs.map(blog =>
                        <Blog key={blog.id} blog={blog}

                        />)
                }
                
            </div>
            <div className='col-span-5 md:col-span-4'>
                <h3 className='text-indigo-500 bg-indigo-200 font-semibold px-4 py-6 md:px-5 md:py-8 text-sm rounded-lg text-center'>Spent time on read :</h3>
                <div className='mt-6 p-5 bg-gray-200 rounded-lg'>
                    
                    <p>Bookmarked Blogs:</p>
                    <div></div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;