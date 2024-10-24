import PropTypes from 'prop-types'
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookMark, handleReadTime, handleMarkAsRead }) => {
    const {  author, author_img, cover, hashtags, posted_date, reading_time, title } = blog;
    const [first, second] = hashtags;
    return (
        <div className="pb-9 border-b-2 ">
            <img className="w-full rounded-lg" src={cover} alt="" />
            <div className="flex justify-between items-center mt-3 ">
                <div className="flex gap-2">
                    <img className="w-12 h-12" src={author_img} alt="" />
                    <div>
                        <p className="text-base font-bold">{author}</p>
                        <p className="text-sm text-gray-400 font-light">{posted_date}</p>
                    </div>
                </div>
                <div className="text-sm text-gray-400 font-light flex items-center gap-2 ">
                    <p>
                        {`${reading_time} min read `}
                    </p>
                    <button
                    className='text-lg text-indigo-600' onClick={()=>{handleBookMark(blog), handleReadTime(reading_time)}}>
                        <CiBookmark />
                    </button>



                </div>
            </div>
            <h2 className="text-4xl font-bold text-black mt-3">{title}</h2>
            <div className="text-gray-400 mt-2">
                {`#${first} #${second}`}</div>
            <button onClick={()=>handleMarkAsRead(blog.id)} className="text-indigo-500 border-b-2 border-indigo-500 mt-2 cursor-pointer ">Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark:PropTypes.func,
    handleReadTime:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;