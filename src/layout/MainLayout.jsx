import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h2>This is Navbar</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
