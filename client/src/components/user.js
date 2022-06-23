import React, { useState,useEffect }  from "react";

export default function User() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch("/api/user")
            .then((res) => {
                return res.json()
            })
            .then((users) => {
                setUsers(users)
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {!users ? "XXXXX" : users.map(u => <div key={u.id}> {u.firstName} {u.lastName}</div>)}
            </header>
        </div>
    );
}
