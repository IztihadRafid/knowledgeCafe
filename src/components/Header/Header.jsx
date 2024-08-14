import profile from "../../images/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between max-w-7xl  m-4 p-4 border-b-2 mx-auto">
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;