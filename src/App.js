import { useEffect } from "react";
import "./App.css";
import Item from "./Components/Item";

function App() {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    const iframeWindow = iframe.contentWindow;

    const data = {
      name: "Abhirup",
      company: "Perch",
    };

    iframeWindow.postMessage(JSON.stringify(data), "*");
    // console.log(iframeWindow);
  }, []);

  return (
    <div>
      <Item />
      <iframe
        src="https://perch-assignment-abhirup.netlify.app/"
        title="Destination"
        style={{ display: "none" }}
      ></iframe>
    </div>
  );
}

export default App;
