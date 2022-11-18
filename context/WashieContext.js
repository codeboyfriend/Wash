import { createContext, useState } from 'react';

const washieContext = createContext();

export function WashieProvider ({ children }) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <washieContext.Provider value = {{
            userName,
            setUserName,
            password,
            setPassword,
            email,
            setEmail
        }}>
            { children }
        </washieContext.Provider>
    )
}

export default washieContext;