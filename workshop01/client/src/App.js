import React from "react";
import manu from "./manu.png";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/message")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
        <img src={manu} alt='manu' width="100" height="100" />
        <b>{!data ? "Loading..." : data}</b><br/>
        <b>Repository <a href="https://github.com/Damienskt/myrepo">https://github.com/Damienskt/myrepo</a></b>
    </div>
  );
}

export default App;