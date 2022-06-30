// client/src/App.js

import "./App.css";

import {BrowserRouter, Routes, Route, Outlet, useParams} from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/navbar/Home"
import Users from "./pages/navbar/Users"
import Settings from "./pages/navbar/Settings"
import Admin from "./pages/navbar/Admin"
import User from "./components/user";

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path='/users' element={<Users/>}>
                                <Route path=':id' element={<User/>}/>
                            </Route>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/admin' element={<Admin/>}/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
} // App()

function Layout() {
    return (
        <div className="layout">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default App;