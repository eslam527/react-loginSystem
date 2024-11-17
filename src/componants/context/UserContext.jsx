import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";







export let UserContext = createContext();
export default function UserContextProvider({children}) {
    const [userData, setUserData] = useState([])
    const [logInData,setLogInData] =useState([])
useEffect(()=>{
    if(localStorage.getItem('userData') != null){
        setUserData(JSON.parse(localStorage.getItem('userData')));
    }
},[]);
useEffect(()=>{
    if(localStorage.getItem('logInData') != null){
        setLogInData(JSON.parse(localStorage.getItem('logInData')));
    }
},[])
console.log(userData);
console.log(logInData);



    return <UserContext.Provider value={{userData,setUserData,logInData,setLogInData}}>
        {children}

    </UserContext.Provider>
}