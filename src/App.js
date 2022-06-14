// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import {decriment,incement} from "./Action/Action"




function App() {

const state = useSelector((state)=>state.changeNum);
const dispach = useDispatch();
 

  return (
    <div className="App">
      <h1>incriment &  decriment</h1>
      {state !== 100 &&<button onClick={()=>dispach(incement())} >+</button>}
      <input type="text" value={state}/>
      {state !== 0 &&<button onClick={()=>dispach(decriment())} >-</button>}





    </div>
  );
}

export default App;
