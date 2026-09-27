import "../App.css";

const Navigator = () => {

    return (
        <div className="sticky top-0 h-screen w-1/3 bg-slate-800 text-white p-4 overflow-y-auto">
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