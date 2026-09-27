import "../App.css";
import projectPlaceholder from "../assets/pexels-technology-1283624.jpg"

const Projects = () =>{

    return (
        <div className="flex flex-col items-center">
        <article className="flex flex-row w-1/2 justify-center mt-6">
            <div className="w-2/5 mr-3">
            <h2 >Project 1</h2>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi fuga rerum necessitatibus provident molestiae nihil at modi, voluptatibus itaque, fugiat sapiente possimus perspiciatis quasi ab vel, qui praesentium voluptates.</p>
            </div>
            <img className="w-2/5 h-auto" src={projectPlaceholder} width="200px"/>
        </article>

        <article className="flex flex-row w-1/2 justify-center mt-6">
            <div className="w-2/5 mr-3">
            <h2>Project 1</h2>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi fuga rerum necessitatibus provident molestiae nihil at modi, voluptatibus itaque, fugiat sapiente possimus perspiciatis quasi ab vel, qui praesentium voluptates.</p>
            </div>
            <img className="w-2/5 h-auto" src={projectPlaceholder} width="200px"/>
        </article>

        <article className="flex flex-row w-1/2 justify-center mt-6">
            <div className="w-2/5 mr-3">
            <h2>Project 1</h2>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi fuga rerum necessitatibus provident molestiae nihil at modi, voluptatibus itaque, fugiat sapiente possimus perspiciatis quasi ab vel, qui praesentium voluptates.</p>
            </div>
            <img className="w-2/5 h-auto" src={projectPlaceholder} width="200px"/>
        </article>
        </div>
    )
}

export default Projects;