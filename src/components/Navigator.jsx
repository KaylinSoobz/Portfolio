import "../App.css";

const Navigator = () => {

    return (
        <div className=" flex flex-col  justify-between sticky top-0 h-screen w-1/3 bg-black text-white p-4 overflow-y-auto">
                <div className="flex flex-col items-center ">
            <h1 className="pl-6 text-lg font-sans font-bold">K.S</h1>
        <ul className="flex flex-row w-2/3 justify-between pt-4">
            <li className="hover:text-rose-950 hover:cursor-pointer">Home</li>
            <li className="hover:text-rose-950 hover:cursor-pointer">About</li>
            <li className="hover:text-rose-950 hover:cursor-pointer">Projects</li>
            <li className="hover:text-rose-950 hover:cursor-pointer">Experience</li>
        </ul>
        </div>
        <blockquote className="flex flex-col items-center">
            <p className="font-semibold">I am the master of my faith,the captain of my soul.</p>
            <cite>-William Ernest Henley</cite>
        </blockquote>
         <div className="flex flex-col items-center  p-3">
          <div className="flex flex-row w-1/2 justify-around pb-1 ">
           <label className="hover:text-rose-950 hover:cursor-pointer">LinkedIn</label>
           <label className="hover:text-rose-950 hover:cursor-pointer">GitHub</label>
           <label className="hover:text-rose-950 hover:cursor-pointer">Instagram</label>
          </div>
         <div className="flex justify-center ">
           <label >© 2026 Kaylin Subramanian</label>
         </div>
         </div>
        </div>
    )
}

export default Navigator ;