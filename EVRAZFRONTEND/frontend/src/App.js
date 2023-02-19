import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Mnemoschema from './components/Mnemoschema';
import Charts from './components/Charts';


function App() {

  return   <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height : 'inherit'
      }}>
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/mnemoschema' element={<Mnemoschema/>}/>
            <Route path='/charts' element={<Charts/>}/>
        </Routes>
        {/* <Main/> */}
      </div>
  </>;
}

export default App;
