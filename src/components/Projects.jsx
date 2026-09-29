import "../App.css";
import projectPlaceholder from "../assets/pexels-technology-1283624.jpg"

const Projects = () =>{

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-black font-[600]">Projects</h1>
        <article className="flex flex-col w-2/3 items-center m3-6">
            <h2 className="text-white font-[600] bg-black w-1/5 text-center m-2 rounded-full">TaskFlow</h2>
            <img className="w-2/5 h-auto hover:border-3 hover:border-rose-900 hover:cursor-pointer" src={projectPlaceholder} width="200px"/>
            <p className="text-black text-center font-[550]">A task management application designed to help users organize and keep track of their daily tasks. The application allows users to create, manage, and monitor tasks through a simple and intuitive interface.
This project focuses on applying **React, JavaScript, HTML, and CSS to build an interactive and responsive user experience while practicing component-based development and state management.
</p>
        </article>

        <article className="flex flex-col w-2/3 items-center mt-6">
            <h2 className="text-white font-[600] bg-black w-1/5 text-center m-2 rounded-full ">Game Library</h2>
            <img className="w-2/5 h-auto hover:border-3 hover:border-rose-900 hover:cursor-pointer" src={projectPlaceholder} width="200px"/>
            <p className="text-black text-center font-[550]"> is a game library application designed to help users browse, discover, and organize games. The project focuses on presenting game information in a clean and user-friendly interface.
Through this project, I practiced working with React, JavaScript, APIs, components, and dynamic data while building an interactive application that can display and manage game-related information.
</p>
        </article>

        <article className="flex flex-col w-2/3 items-center mt-6">
            <h2 className="text-white font-[600] bg-black w-1/5 text-center m-2 rounded-full">Knowledge Base</h2>
            <img className="w-2/5 h-auto hover:border-3 hover:border-rose-900 hover:cursor-pointer" src={projectPlaceholder} width="200px"/>
            <p className="text-black text-center font-[550]">A centralized web application for organizing and accessing useful information, guides, and resources. It is designed to make information easy to find and navigate through a structured and user-friendly interface.
This project allowed me to practice React, JavaScript, HTML, and CSS while focusing on reusable components, data organization, navigation, and creating a responsive user experience.
</p>
        </article>
        </div>
    )
}

export default Projects;