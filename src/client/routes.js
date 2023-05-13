// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home, { fetchData } from './components/Home';
import Test from './components/Test';

// const ClientRoutes = () => {
//   return (
//     <Routes>
//       <Route exact path='/' element={<Home />} />
//       <Route path='test' element={<Test />} />
//     </Routes>
//   );
// };

// export default ClientRoutes;

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    fetchData,
  },
  {
    path: '/test',
    component: Test,
  },
];

export default routes;
