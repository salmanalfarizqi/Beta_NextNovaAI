import React from 'react'
import { Home, Auth, Regist, Login, Splash, Profile, Member} from './Routes';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Splash} />
                    <Route path="/Home" Component={Home} />
                    <Route path="/Auth" Component={Auth} />
                    <Route path="/Regist" Component={Regist} />
                    <Route path="/Login" Component={Login} />
                    <Route path="/Profile" Component={Profile} />
                    <Route path="/Member" Component={Member} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
