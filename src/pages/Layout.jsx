import React from 'react'
import { Outlet} from "react-router-dom";
import FormHeader from '../components/FormHeader';

function Layout() {
  return (
    <>
    <FormHeader/>
    <Outlet/>
    </>
  )
}

export default Layout