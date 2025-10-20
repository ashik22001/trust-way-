"use client"

// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { auth } from "../lib/firebase";

const { createContext, useState, useEffect, useContext } = require("react")


// const provider = new GoogleAuthProvider();

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {


    const [gallary_image, setGallary_image] = useState([])


    // donation state

    const [donationAmount, setdonationAmount] = useState([])
    const [donationMedium, setdonationMedium] = useState([])
    const [donationquestion, setdonationquestion] = useState([])


    const a = 'this is context page js'


    const userInfo = {


       
        donationAmount, setdonationAmount,
        donationMedium, setdonationMedium,
        donationquestion, setdonationquestion,
        a



    }




    // useEffect(() => {

    //     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
    //         if (currentuser && currentuser.emailVerified) {
    //             setUsers(currentuser);

    //         } else {
    //             setUsers(null);
    //         }
    //         setLoading(false)
    //     })
    //     return () => unsubscribe()


    // }, [])







    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)