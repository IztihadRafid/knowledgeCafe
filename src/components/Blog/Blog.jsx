import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({blog,handleAddToBookmark}) => {
   const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8" src={cover} alt="" />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-16" src={author_img} alt="" />
                    <div className="ml-6">
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                        
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={()=>handleAddToBookmark(blog)} className="text-red-600 font-bold text-2xl"> <FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;