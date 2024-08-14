
const Bookmark = ({bookmark}) => {
    const {title}= bookmark
    return (
        <div className="bg-purple-200 p-4 m-4 rounded-xl">
           <h1 className="text-xl">{title}</h1> 
        </div>
    );
};

export default Bookmark;