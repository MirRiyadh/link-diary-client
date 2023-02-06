import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../pages/sharedPages/Footer";
import NavbarSection from "../pages/sharedPages/NavbarSection";
import { fetchingContent, fetchingTags } from "../redux/thunk/fetching";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingContent());
    dispatch(fetchingTags());
  }, [dispatch]);
  return (
    <div>
      <NavbarSection></NavbarSection>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
