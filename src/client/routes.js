// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Test from './pages/Test';

// const ClientRoutes = () => {
//   return (
//     <Routes>
//       <Route exact path='/' element={<Home />} />
//       <Route path='test' element={<Test />} />
//     </Routes>
//   );
// };

// export default ClientRoutes;

// const routes = [
//   {
//     ...Home,
//     path: '/',
//     exact: true,
//   },
//   {
//     ...Test,
//     path: '/test',
//   },
// ];
const routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...Test,
        path: '/test',
      },
    ],
  },
];

export default routes;
