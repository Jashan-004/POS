import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Auth, Orders, Table, Menu} from './pages/index.js';
import Header from './components/shared/Header.jsx'

function App() {

  return (
    <>
     <Router>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/auth" element = {<Auth />} />
          <Route path = "/orders" element = {<Orders />} />
          <Route path = "/tables" element = {<Table />} />
          <Route path = "/menu" element = {<Menu />} />
          <Route path = "*" element = {<div>Not Found</div>} />
        </Routes>
     </Router>
    </>
  )
}

export default App
