import {NavLink, Outlet} from "react-router-dom";


const Layout = () => {
  return (
   <>
    <nav>
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/products'}>Products</NavLink></li>
          <li><NavLink to={'/product/4'}>Product 4</NavLink></li>
          <li><NavLink to={'/product/5'}>Product 5</NavLink></li>
        </ul>
      </nav>
    <Outlet/>
  </>

  );
};

export default Layout;
