import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './ui-components/layout/Layout'
import Menu from './ui-components/menu/menu'
import Dashboard from './pages/dashboard/Dashboard'
import MyDevices from './pages/my-devices/MyDevices';


function App() {

  return (
    <Router>
      <Layout/>
      <div className='body-section'>
      <Menu/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='my-device' element={<MyDevices/>}/>
      </Routes>
      </div>
    
    </Router>
  )
};

export default App;
