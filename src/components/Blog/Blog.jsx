import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
   const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-20'>
            <img className='w-[600px] mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <img className='w-16 rounded-full  ' src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='mr-10'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='ml-2 text-rose-500 '><FaRegBookmark></FaRegBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{
                hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
                
                }</p>
                <button 
                onClick={()=>{handleMarkAsRead(id,reading_time)}}
                className='text-purple-600 underline font-bold'>Mark as read</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;