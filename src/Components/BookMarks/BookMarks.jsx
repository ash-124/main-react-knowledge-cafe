import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";
const BookMarks = ({ bookMarks, readTime }) => {
    console.log(readTime);
    return (
        <>
            <div className='col-span-5 md:col-span-4'>
                <h3 className='text-indigo-500 bg-indigo-200 font-semibold px-4 py-6 md:px-5 md:py-8 text-sm rounded-lg text-center'>Spent time on read :{readTime}</h3>
                <div className='mt-6 p-5 bg-gray-200 rounded-lg'>

                    <p className="font-semibold text-sm">Bookmarked Blogs:{bookMarks.length}</p>
                    <div>
                        {
                            bookMarks.map((bookMark) => <BookMark key={bookMark.id} bookMark={bookMark.title} />)
                        }
                    </div>
                </div>
            </div>

        </>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readTime:PropTypes.num
}

export default BookMarks;
