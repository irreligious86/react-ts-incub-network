import React from "react";
import classes from './App.module.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";

type AppPropsType = {

}

const App: React.FC<AppPropsType> = props => {
  return (
<BrowserRouter>
  <div className={classes['App-wrapper']}>
    <Header/>
    <Sidebar/>
    <Content/>
    <Footer/>
  </div>
</BrowserRouter>
  );
}

export default App;
