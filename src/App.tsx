import React from "react";
import './App.css';
// import Header from "./components/Header/header";
// import Sidebar from "./components/Sidebar/sidebar";
// import Content from "./components/Content/content";
// import Footer from "./components/Footer/footer";
import {BrowserRouter} from "react-router-dom";

type AppPopsType = {

}

const App: React.FC<AppPopsType> = props => {
  return (
<BrowserRouter>
  <div className="app-wrapper">
    {/*<Header/>*/}
    {/*<Sidebar/>*/}
    {/*<Content*/}
    {/*    dispatch={props.dispatch}*/}
    {/*    state={props.state}*/}
    {/*    profilePage={props.state.profile.posts}*/}
    {/*    newPostText={props.state.newPostText}*/}
    {/*    store={props.store}*/}
    {/*    // addPost={props.addPost}*/}
    {/*    // updateNewPostText={props.updateNewPostText}*/}
    {/*/>*/}
    {/*<Footer/>*/}
  </div>
</BrowserRouter>
  );
}

export default App;
