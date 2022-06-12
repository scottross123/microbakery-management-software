import { Routes, Route } from 'react-router-dom';
import routes, { route } from './routes';

const RouterProvider = () => {
  return (
    <Routes>
        { routes.map(({ path, element, props }: route) => {
            return <Route path={path} element={element(props ? props : {})} />
        })} 
    </Routes>
  );
}

export default RouterProvider;