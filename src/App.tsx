import React from "react";
import "./App.less";
import ContextRoute from "./components/route/LayoutPage";
import Login from './components/features/Login/Login';
import SideBar from './components/layout/SideBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css'
import '../../App.css';
import '../../App.less'
import LayoutPage from './components/layout/LayoutPage';
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

const App = () => {
  return (
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<LayoutPage />} />
                    <Route path='/auth/*' element={<Login />} />
                    <Route path='/admin/*' element={<LayoutPage />} />

                </Routes>
            </Provider>
        </Router>
    );
}

export default App;