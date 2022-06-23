// client/src/App.js

import React,{useState, useEffect} from "react";
import "./App.css";
import CustomizedTables from "./components/userTable";
import User from "./components/user";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/user")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(data.message);
        });
  }, []);

  return (
      <div className="App">
          <header className="App-header">
              <p>{!data ? "Loading..." : data}</p>
          </header>
          <CustomizedTables/>
          <User/>
      </div>
  );
}

export default App;