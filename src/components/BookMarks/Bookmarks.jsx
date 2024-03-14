
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-50 mt-2 pt-2">
            <div>
                <h2 className="text-3xl text-center mb-5 underline">Reading time:{readingTime}</h2>
            </div>
            <h2 className='text-center text-2xl'>Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;