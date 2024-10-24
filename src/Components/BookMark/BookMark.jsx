import PropTypes from "prop-types";
const BookMark = ({ bookMark }) => {
    
    return (
        <div className="px-5 py-3  rounded-lg text-indigo-300 font-bold mt-2 bg-white">
           <p>{bookMark}</p> 
        </div>
        
    );
};
BookMark.propTypes = {
    bookMark: PropTypes.string,
}

export default BookMark;
