import "../App.css";
import projectPlaceholder from "../assets/pexels-technology-1283624.jpg"

const Projects = () =>{

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-rose-900 font-[600]">Projects</h1>
        <article className="flex flex-col w-2/3 items-center m3-6">
            <h2 className="pb-1 text-rose-800 font-[550]">Project 3</h2>
            <img className="w-2/5 h-auto hover:border-3 hover:border-rose-900 hover:cursor-pointer" src={projectPlaceholder} width="200px"/>
            <p className="text-black text-center font-[550]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi fuga rerum necessitatibus provident molestiae nihil at modi, voluptatibus itaque, fugiat sapiente possimus perspiciatis quasi ab vel, qui praesentium voluptates.</p>
        </article>

        <article className="flex flex-col w-2/3 items-center mt-6">
            <h2 className="pb-1 text-rose-900 font-[550]">Project 3</h2>
            <img className="w-2/5 h-auto hover:border-3 hover:border-rose-900 hover:cursor-pointer" src={projectPlaceholder} width="200px"/>
            <p className="text-black text-center font-[550]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi fuga rerum necessitatibus provident molestiae nihil at modi, voluptatibus itaque, fugiat sapiente possimus perspiciatis quasi ab vel, qui praesentium voluptates.</p>
        </article>

        <article className="flex flex-col w-2/3 items-center mt-6">
            <h2 className="pb-1 text-rose-900 font-[550]">Project 3</h2>
            <img className="w-2/5 h-auto hover:border-3 hover:border-rose-900 hover:cursor-pointer" src={projectPlaceholder} width="200px"/>
            <p className="text-black text-center font-[550]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi fuga rerum necessitatibus provident molestiae nihil at modi, voluptatibus itaque, fugiat sapiente possimus perspiciatis quasi ab vel, qui praesentium voluptates.</p>
        </article>
        </div>
    )
}

export default Projects;