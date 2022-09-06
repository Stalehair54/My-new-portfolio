import { Link, Outlet } from "react-router-dom";
import Stylednavbar from "../components/Stylednavbar";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <>
      <Stylednavbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
