import React from 'react';
import {useRoutes} from 'hookrouter';
import About from "./pages/About";
import SplitByHours from './pages/SplitByHours';
import SplitWithSupportStaff from './pages/SplitWithSupportStaff';
import NotFoundPage from './pages/NotFoundPage';
import ReactGA from 'react-ga';
import './App.css';

const routes: {} = {
  '/': () => <SplitByHours />,
  '/about': () => <About />,
  '/split-by-hours': () => <SplitByHours />,
  '/split-with-support-staff': () => <SplitWithSupportStaff />
}

const App: React.FC = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}

export default App;