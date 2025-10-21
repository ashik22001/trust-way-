"use client"

// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { auth } from "../lib/firebase";

const { createContext, useState, useEffect, useContext } = require("react")


// const provider = new GoogleAuthProvider();

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {


    // home page state 
    const [navbar_news, setnavbar_news] = useState([])
    const [advantage_section, setadvantage_section] = useState([])
    const [company_founder_image, setcompany_founder_image] = useState([])
    const [company_founder_other_Image, setcompany_founder_other_Image] = useState([])
    const [Visa_Workting_image, setVisa_Workting_image] = useState([])
    const [our_service_Card, setour_service_Card] = useState([])
    const [Visa_Image, setVisa_Image] = useState([])
    const [our_faq_section, setour_faq_section] = useState([])



    // Work-visa state

    const [Country_Name, setCountry_Name] = useState([])
    const [visa_job_vacations, setvisa_job_vacations] = useState([])
    const [visa_condition_section, setvisa_condition_section] = useState([])
    const [country_popular_image, setcountry_popular_image] = useState([])


    // Study Visa state 

    const [Study_Our_Service_Card, setStudy_Our_Service_Card,] = useState([])
    const [Popular_Destination_Image, setPopular_Destination_Image] = useState([])
    const [Study_Country_image, setStudy_Country_image] = useState([])
    const [About_Say, setAbout_Say] = useState([])




    const a = 'this is context page js'


    const userInfo = {


        // home page state 

        navbar_news, setnavbar_news,
        advantage_section, setadvantage_section,
        company_founder_image, setcompany_founder_image,
        company_founder_other_Image, setcompany_founder_other_Image,
        Visa_Workting_image, setVisa_Workting_image,
        our_service_Card, setour_service_Card,
        Visa_Image, setVisa_Image,
        our_faq_section, setour_faq_section,


        // Work-visa state

        Country_Name, setCountry_Name,
        visa_job_vacations, setvisa_job_vacations,
        visa_condition_section, setvisa_condition_section,
        country_popular_image, setcountry_popular_image,


        // Study Visa state 

        Study_Our_Service_Card, setStudy_Our_Service_Card,
        Popular_Destination_Image, setPopular_Destination_Image,
        Study_Country_image, setStudy_Country_image,
        About_Say, setAbout_Say,







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