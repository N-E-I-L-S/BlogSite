import { useContext, createContext, useState } from "react";

const UserContext = createContext();
export function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
function UserAuth() {
    return useContext(UserContext)
}

export default UserAuth