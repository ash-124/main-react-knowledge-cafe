import { useState, useEffect } from 'react';
import Blog from '../blog/Blog';
import BookMarks from '../BookMarks/BookMarks';


const Blogs = () => {
    const [bookMarks, setBookMarks] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    const handleBookMark = (blog) => {

        let newBookMarks =[...bookMarks,blog];
        setBookMarks(newBookMarks);
    }
    const handleReadTime = (time) =>{
       let newTime = readTime +time;
        setReadTime(newTime);
    }
    const handleMarkAsRead =(id) =>{
        let markReadBookMarks= bookMarks.filter( markBook => markBook !==id)
        console.log(bookMarks);
        setBookMarks(markReadBookMarks);
    }

    return (
        <div className='grid grid-cols-12 gap-6 w-11/12 mx-auto' >
            <div className='col-span-7 md:col-span-8 flex flex-col gap-10  '>

                {
                    blogs.map((blog, idx) =>
                        <Blog 
                        key={idx}
                        blog={blog}
                        handleBookMark ={handleBookMark}
                        handleReadTime ={handleReadTime}
                        handleMarkAsRead={handleMarkAsRead}
                        />)
                }

            </div>
            <BookMarks bookMarks={bookMarks} readTime ={readTime}   />

        </div>

    );
};

export default Blogs;