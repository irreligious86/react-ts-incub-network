import React from "react";
import './App.css';
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";

type PropsType = {
    store: any
    state: any
    dispatch: any

}

const App: React.FC<PropsType> = (props) => {
  return (
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <Content
            dispatch={props.dispatch}
            state={props.state}
            profilePage={props.state.profile.posts}
            newPostText={props.state.newPostText}
            store={props.store}
        />
        <Footer/>
      </div>
  );
}

export default App;
