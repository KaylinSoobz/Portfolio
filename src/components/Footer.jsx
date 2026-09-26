import "../App.css";

const Footer = () => {

    return (
        <div className="sticky bottom-0 z-50 w-full bg-white bg-white shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.1)]">
         <div className="flex flex-row justify-center">
          <div className="flex flex-row w-1/2 justify-around">
           <label>LinkedIn</label>
           <label>GitHub</label>
           <label>Insatgram</label>
          </div>
         </div>
         <div className="flex justify-center">
           <label>© 2026 Kaylin Subramanian</label>
         </div>
        </div>
    )
}

export default Footer;