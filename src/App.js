
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Department from './components/Department'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Departmentlisting from './components/Departmentlisting';
import Addemployee from './components/Addemployee';
import Edit from './components/Edit';
import Adddepartment from './components/Adddepartment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Router>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/departmentlisting' element={<Departmentlisting/>}/>
            <Route path='/addemployee' element={<Addemployee/>}/>
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/adddepartment' element={<Adddepartment/>}/>
          </Routes>
        </Router>
       <Footer/>
      
    </div>
  );
}

export default App;
