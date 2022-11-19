import { createContext, useState } from 'react';

const washieContext = createContext();

export function WashieProvider ({ children }) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [temperature, setTemperature] = useState("");
    const [color, setColor] = useState("");
    const [other, setOther] = useState("");
    const [order, setOrder] = useState(false);

    return (
        <washieContext.Provider value = {{
            userName,
            setUserName,
            password,
            setPassword,
            email,
            setEmail,
            temperature,
            setTemperature,
            color,
            setColor,
            other,
            setOther,
            order,
            setOrder
        }}>
            { children }
        </washieContext.Provider>
    )
}

export default washieContext;