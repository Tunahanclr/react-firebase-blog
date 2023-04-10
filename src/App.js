import './App.css';
import Blog from './components/Blog';
import Login from './components/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Login />}/>
<Route path='/blog' element={<Blog/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
