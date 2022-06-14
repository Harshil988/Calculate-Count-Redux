// import logo from './logo.svg';
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decriment, incement, add } from "./Action/Action";
import { useState } from "react";

function App() {
  const [value, setValue] = useState();

  const state = useSelector((state) => state.changeNum);
  const dispach = useDispatch();
  const [errors, setErrors] = useState("");

  console.log("errors", errors);
console.log("value",value)
  const enterVlaue = (e) => {
    setValue(e.target.value);
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if ( value === undefined || !value) {
      formIsValid = false;
      errors["number"] = "*Please enter Number";
    }

    setErrors(errors);
    return formIsValid;
  };

  const addCount = () => {
    if (validateForm()) {
      dispach(add(parseInt(value)));
      setValue("");
    }
  };
  const NumberKey = (evt) => {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
      evt.preventDefault();
    }
  };

  return (
    <div className="App">
      <h1>increment & decriment</h1>
      {state !== 100 && <button onClick={() => dispach(incement())}>+</button>}
      <input type="text" value={state} />
      {state !== 0 && <button onClick={() => dispach(decriment())}>-</button>}
      <br></br>
      <input
        type="text"
        onChange={enterVlaue}
        value={value}
        onKeyPress={(e) => NumberKey(e)}
      />
    
      <button onClick={() => addCount()}>add count</button>
      <br></br>
       <span style={{ color: "red", top: "5px", fontSize: "32px" }}>
        {errors["number"]}{" "}
      </span>
     
    </div>
  );
}

export default App;
