import { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
const App=()=> {
  const [modes,setMode]=useState(false)
  let changeMode=()=>{
    setMode((modes)=>!modes)
  }
  return (
    <div className={modes?"app":"App"}>
      <header className="App-header">
       <Navbar mode={modes} modefunc={changeMode}/>
       <h1>Hello welcome</h1>
      </header>
    </div>
  );
}

export default App;
