import "./App.css";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />

        <div>Home Section app</div>

        <HomePage />
      </div>
    </>
  );
}

export default App;
