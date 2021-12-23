import logo from "./logo.svg";
import "./App.css";
import Display from "./display";

function App() {
  const os = ["Android", "Blackberry", "iOS", "Windows Phone"];
  const manufacturers = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div>
      <Display heading={"Operating System"} content={os} />
      <Display heading={"Manufacturers"} content={manufacturers} />
    </div>
  );
}

export default App;
