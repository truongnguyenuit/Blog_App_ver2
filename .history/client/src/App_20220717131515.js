import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configRouter } from './router/configRouter';
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <div>
     <NavbarComponent />
      {/* <BrowserRouter>

        <NavbarComponent />
        
        <Routes>
          {configRouter.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={item.page}
              />
            );
          })}

        </Routes>

      </BrowserRouter> */}
    </div>
  );
}

export default App;
