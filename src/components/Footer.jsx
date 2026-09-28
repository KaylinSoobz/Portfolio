import "../App.css";

const Footer = () => {

    return (
        <div className="sticky bottom-0 z-50 w-full h-full bg-white shadow-[0_-8px_12px_-6px_#38bdf8] pb-3 bg-slate-900 ">
         <div className="flex flex-row justify-center bg-slate-900">
          <div className="flex flex-row w-1/2 justify-around pb-1 bg-slate-900">
           <label>LinkedIn</label>
           <label>GitHub</label>
           <label>Instagram</label>
          </div>
         </div>
         <div className="flex justify-center bg-slate-900">
           <label>© 2026 Kaylin Subramanian</label>
         </div>
        </div>
    )
}

export default Footer;