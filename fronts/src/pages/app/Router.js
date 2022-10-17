import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/app/App';
import Login1 from '../pages/login/Login1';
import Login2 from '../pages/login/Login2';
import Login3 from '../pages/login/Login3';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/fronts/" element={<Login1/>} />
            <Route path="/fronts/" element={<Login2/>} />
            <Route path="/fronts/" element={<Login3/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;