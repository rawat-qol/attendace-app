// Routing.js
import React, {Component} from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import EmployeeList from  './EmployeeList';
import ManageAttendance from './ManageAttendance';
import Overview from './Overview';
import Reports from './Reports';

class Routing extends Component {
    render() {
        return(
            <BrowserRouter>
            <div>
                <header className="bg-gray-800 text-white">
                    <nav className="container mx-auto flex items-center justify-between py-4">
                         {/* Your Logo or Brand */}
                         <div className="flex space-x-4">
                         <img
                         src="./images/logo.jpg"         
                         alt="Logo"
                         className="h-8"
                         width="60"
                         height="60"
                         />
                         </div>
                        

                        <div className="flex space-x-4">
                            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                Overview
                            </Link>
                            <Link to="/ManageAttendance" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                ManageAttendance
                            </Link>
                            <Link to="/EmployeeList" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                Employee List
                            </Link>
                            <Link to="/Reports" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
                                Reports
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <input type="text" placeholder="Search..." className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"></input>
                        </div>
                    </nav>
                </header>
                <Routes>
                    <Route exact path='/' Component={Overview}></Route>
                    <Route exact path='/ManageAttendance' Component={ManageAttendance}></Route>
                    <Route exact path='/EmployeeList' Component={EmployeeList}></Route>
                    <Route exact path='/Reports' Component={Reports}></Route>
                </Routes>
            </div>
            </BrowserRouter>
        )    
    };
};

export default Routing;
