import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 m-4 p-4 rounded-xl">
            <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark)=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;