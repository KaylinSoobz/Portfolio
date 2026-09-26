import "./App.css";
import Navigator from "./components/Navigator.jsx"
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-cyan-300">
    <Navigator/>
    <Body/>
    <Footer />
    </div>
  )

}

export default App;
