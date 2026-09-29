import "../App.css";
import profileImg from "../assets/wattblicker-avatar-7964945.png"

const About = () => {
    return (
        <div className="flex flex-col items-center font-sans">
          <img className="mb-2 h-[15rem] w-[15rem]" src={profileImg} alt="my image"/>
          <h2 className="text-white font-[600] bg-black w-1/5 text-center rounded-full" >About</h2>
          <p className="text-center w-1/2 font-sans font-[550]">
I'm an aspiring Front-End Developer currently building my skills in JavaScript, React, HTML, and CSS. I enjoy creating interactive, responsive, and user-friendly web applications while continuously improving my understanding of modern web development.
I'm currently focused on strengthening my JavaScript fundamentals, learning React and its core concepts, and developing practical projects that allow me to apply what I learn.
I'm passionate about technology, problem-solving, and building things that are both functional and enjoyable to use. This portfolio showcases my learning journey, projects, and progress as I work toward becoming a professional developer.
</p>
        </div>
    )
}

export default About ;