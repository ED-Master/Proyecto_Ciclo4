// import logo from './logo.svg';
import '../styles/App.css';
import { Home } from "./Home";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Administrador } from './Administrador';
import { Cliente } from "./Cliente";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="Administrador" element={<Administrador />}/>
            <Route path="Cliente" element={<Cliente />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
