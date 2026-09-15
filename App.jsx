import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ThemeProvider  from "./context/ThemeProvider";
import UseStatePrac from "./practicals/UseStatePrac";
import UseReducerPrac from "./practicals/UseReducerPrac";
import UseContextPrac from "./practicals/UseContextPrac";
import UseEffectPrac from "./practicals/UseEffectPrac";
import UseLayoutEffectPrac from "./practicals/UseLayoutEffectPrac";
import UseInsertionEffectPrac from "./practicals/UseInsertionEffectPrac";


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <nav>
          <button style={{backgroundColor: "#000000"}}>
            <Link to="/useState" style={{ color: "#ffffff", padding : "11px 11px"}}>UseState</Link>
          </button> |{" "}
          <button style={{backgroundColor: "#000000"}}>
            <Link to="/useReducer" style={{ color: "#ffffff"}}>UseReducer</Link>
          </button> |{" "}
           <button style={{backgroundColor: "#000000"}}>
            <Link to="/useContext" style={{ color: "#ffffff"}}>UseContext</Link>  
          </button> |{" "}
          <button style={{backgroundColor: "#000000"}}>
            <Link to="/useEffect" style={{ color: "#ffffff"}}>UseEffect</Link>
          </button> |{" "}
          <button style={{backgroundColor: "#000000"}}>
            <Link to="/useLayoutEffect" style={{ color: "#ffffff"}}>UseLayoutEffect</Link>
          </button> |{" "}
          <button style={{backgroundColor: "#000000"}}>
            <Link to="/useInsertionEffect" style={{ color: "#ffffff"}}>UseInsertionEffect</Link>
          </button> 
        </nav>
        <br></br>
        <Routes>
          <Route path="/useState" element={<UseStatePrac />} />
          <Route path="/useReducer" element={<UseReducerPrac/>} />
          <Route path="/useContext" element={<UseContextPrac />} />
          <Route path="/useEffect" element={<UseEffectPrac />} />
          <Route path="/useLayoutEffect" element={<UseLayoutEffectPrac />} />
          <Route path="/useInsertionEffect" element={<UseInsertionEffectPrac />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;

//npm install react-router-dom