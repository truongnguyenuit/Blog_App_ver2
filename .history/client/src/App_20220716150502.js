import { DatePicker } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configRouter } from './router/configRouter';
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <div>

      <BrowserRouter>
      <NavbarComponent />
      <Routes>
        {configRouter.map((item, index) => {
          return (
            <Route 
              key=

          );
        })}
  
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
