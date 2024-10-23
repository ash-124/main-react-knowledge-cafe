
const Blog = ({ blog }) => {
    const { author, author_img, cover, hashtags, posted_date, reading_time, title } = blog;
    const [first, second] = hashtags;
    console.log(first, second)
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
                <div className="text-sm text-gray-400 font-light">
                    {reading_time}
                    <span>icon</span>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-black mt-3">{title}</h2>
            <div className="text-gray-400 mt-2">
                {`#${first} #${second}`}</div>
            <button className="text-indigo-500 border-b-2 border-indigo-500 mt-2"><a href="">Mark as read</a></button>
        </div>
    );
};


export default Blog;