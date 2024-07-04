import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{ // here children is a genric name means whatever you are receving just pass to further as it is
    const [user, setUser]= React.useState(null) // created a null or no user
    return(
        <>
        <UserContext.Provider  value={{user, setUser}}> {/* given access to the user and setUser for this */}
            {children} {/* this is where the values are accessed */}
        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider