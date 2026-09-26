import About from "./About.jsx"
import Projects from "./Projects.jsx";

const Body = () => {
    return (
        <div className="flex-1 bg-slate-950 text-cyan-300">
        <About/>
        <Projects/>
        </div>
    )
}

export default Body;