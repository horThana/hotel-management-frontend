import Navbar from '../component/navbar/navbar';

const home = () => {
    return (
        <div>
            <Navbar/>
        <h1>Home</h1>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWHQRT_0xG2UvD389c4ANgIxcHUugn7CrkA&s"
            alt=""
            className=""></img>
        <p>Home page content</p>
        </div>
    )
}

export default home;