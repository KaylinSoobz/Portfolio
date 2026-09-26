import "../App.css";
import profileImg from "../assets/wattblicker-avatar-7964945.png"

const About = () => {
    return (
        <div className="flex flex-col w-full items-center mt-6 mb-6 pb-3 bg-slate-950 text-cyan-300">
          <img className="mb-2 h-[15rem] w-[15rem]" src={profileImg} alt="my image"/>
          <h2 className="text-cyan-500" >About</h2>
          <p className="text-center w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis ea, velit natus iste deleniti, nulla suscipit autem, rerum quia iusto dicta laudantium cupiditate libero est fugit recusandae neque magni?
          Quos, repellat nam nihil quam, reprehenderit quisquam dolore vel minima laboriosam exercitationem ab nesciunt cupiditate similique! Soluta minima nostrum eligendi repudiandae quas ipsa ea magnam rerum. Adipisci, non. Numquam, id?
          Omnis quo ratione nam necessitatibus officia dicta libero delectus qui consequuntur non quas fuga sequi quod veniam, esse similique distinctio minima? Quod eligendi natus veniam inventore sequi est, aperiam ut.</p>
        </div>
    )
}

export default About ;