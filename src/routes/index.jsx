
import {BrowserRouter, Routes, Route  } from "react-router-dom";
import { Fragment } from "react";
import Home from "../pages/Home/Index";
import Header from "../components/cabeçalho/Header";
import Footer from "../components/footer";
import Error from "../pages/Home/Error/Index";
import Imobi from "../pages/Home/imobi/index";
import Login from "../components/Login/Index";
import Cadastro from "../components/Cadastro/Index";
const RouterApp = () =>{
  return (
    <Fragment>
      
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/imovel" element={<Imobi/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    </Fragment>
  );}
  export default RouterApp