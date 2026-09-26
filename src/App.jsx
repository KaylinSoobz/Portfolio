import "./App.css";
import Navigator from "./components/Navigator.jsx"
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {

  return (
    <div className="flex flex-col min-h-screen">
    <Navigator/>
    <Body/>
    <Footer />
    </div>
  )

}

export default App;
