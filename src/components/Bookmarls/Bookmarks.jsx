import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 m-4 p-4 rounded-xl">
            <div>
                <h2 className="text-2xl">Reading Time: {readingTime}</h2>
            </div>
            <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;