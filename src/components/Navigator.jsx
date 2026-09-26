import "../App.css";

const Navigator = () => {

    return (
        <div className="flex flex-row justify-between items-center h-[35px] sticky top-0 z-50 w-full bg-white shadow-md">
            <h2 className="pl-6">K.S</h2>
        <ul className="flex flex-row w-1/3 justify-around">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        </div>
    )
}

export default Navigator ;