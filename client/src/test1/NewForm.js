import { useState } from "react";

function NewForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // let res = await fetch("https://httpbin.org/post", {
            let res = await fetch("/api/v01/users", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                // setFirstName("");
                // setLastName("");
                // setEmail("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    placeholder="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    value={lastName}
                    placeholder="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}

export default NewForm;
