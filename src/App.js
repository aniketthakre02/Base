import './App.css';
import Page1 from "./Components/page1/page1";
import Page2 from './Components/page2/page2';
import Page21 from './Components/page2.1/page21';
import Page3 from './Components/page3/page3';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Page1/>}/>
       <Route path="/Page2" element={<Page2/>}/>
       <Route path="/Page21" element={<Page21/>}/>
       <Route path="Page3" element={<Page3/>}/>
      </Routes>
    
    </BrowserRouter>
   </div>
  );
}

export default App;
