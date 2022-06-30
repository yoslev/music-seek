// import React from 'react';
import UserTables from "../../components/userTable";
import {Outlet} from "react-router-dom";

const Users = () =>{
    return (
        <div className="users">
            <div>
                <h3>Users</h3>
                <UserTables/>
                <Outlet/>
            </div>
        </div>
    );
}
export default Users;
