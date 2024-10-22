import logo from './logo.svg';
import './App.css';
import { useRef } from 'react'; // Correctly import useRef from react
import { useDispatch, useSelector } from 'react-redux';

function App() {
    let inputRef = useRef();
    let dispatch = useDispatch(); // Correctly call useDispatch
    let storeObj = useSelector((store)=>{
      return store;
    });

    
    return (
        <div className="App">
            <input ref={inputRef}></input>

            <button onClick={() => {
                dispatch({ type: "addActor", data: inputRef.current.value });
            }}>Actors</button>
            <button onClick={()=>{
              dispatch({ type:"addCrickter", data:inputRef.current.value});
            }}>Cricketer</button>
            <button onClick={()=>{
              dispatch({type:"addPolitician", data:inputRef.current.value});
            }}>politicians</button>
            <h1>Acoters:{storeObj.actors.join()}</h1>
            <h1>Cricketers:{storeObj.crickters.join()}</h1>
            <h1>Politician:{storeObj.politicians.join()}</h1>
        </div>
    );
}

export default App;
