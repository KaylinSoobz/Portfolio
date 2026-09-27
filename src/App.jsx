import "./App.css";
import Navigator from "./components/Navigator.jsx"
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {

  return (
    <div className="flex flex-row w-screen">
    <Navigator/>
    <Body/>
    </div>
  )

}

export default App;
