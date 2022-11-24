import React from "react";
import logo from "./manu.png";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/message")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App" style={{border: '3px solid black'}}>
        <img src={logo} alt="logo" width="200" />
        <b>{!data ? "Loading..." : data}</b><br/>
        <b>Repository <a href="https://github.com/Damienskt/myrepo">https://github.com/Damienskt/myrepo</a></b>
    </div>
  );
}

export default App;