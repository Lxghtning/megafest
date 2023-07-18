import React, {useState, useEffect} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {collection, doc, getDocs, addDoc} from 'firebase/firestore';
import {db} from '../firebase';
import {Link} from 'react-router-dom';

export default function Signup() {
    
    const firebaseConfig = {
        apiKey: "AIzaSyAF0WIoT0r9nkVP7xV_fPXcH0l1YiFp0yM",
        authDomain: "cresco-1f27c.firebaseapp.com",
        projectId: "cresco-1f27c",
        storageBucket: "cresco-1f27c.appspot.com",
        messagingSenderId: "640869628851",
        appId: "1:640869628851:web:702bb11c00f1000cf029c6",
        measurementId: "G-CV9LJKVTZN"
      };
      
    initializeApp(firebaseConfig);
    const auth = getAuth();
    
    auth.onAuthStateChanged(user=>{
        if(user){
            // window.location.href = "/home";
        };
    });

    //collection
    const usersCollectionRef = collection(db, "users");
    
    //parameters
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Read Data
    // useEffect(()=>{
    //     const getUserList = async ()=>{
    //         try{
    //             const data = await getDocs(usersCollectionRef, );
    //             const filteredData = data.docs.map((doc)=>({
    //                 ...doc.data(),
    //                 email: doc.email,
    //                 password: doc.password,
    //                 name: doc.name,
                    
    //             }))
    //             console.log(filteredData)
    //         }catch(err){
    //             console.log(err);
    //         }
    //     }
    //     getUserList()
    // },[])


    //New Data
    const addNewUser = async ()=>{
        await addDoc(usersCollectionRef,{
            name: name,
            email: email,
            password: password,
            userID: auth?.currentUser?.uid,
        })
        console.log(name,password)
    
    }


    const submitCredentials = async (e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            addNewUser();
        }
        catch(err){
            console.log("Email already in use");
        }
    }
  return (
    <div
        className=" w-[100vw] h-[100vh] bg-[url('https://images.unsplash.com/photo-1688408958818-87ab7f118246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-no-repeat bg-center bg-cover min-h-[100vh] min-w-full m-0">

        <header className=" fixed top-0 h-[10vh] w-[100vw] mx-0 flex justify-between items-center lg:flex-row flex-col">
            
            <div className="lg:hidden backdrop-blur-[30px] h-[100vh] w-[100vw] z-50 absolute flex justify-center flex-col">
                <span className="material-symbols-outlined mr-6 absolute top-8 right-4 text-white text-3xl">
                    menu
                    </span>
                
                <div className="flex justify-center text-center text-2xl my-14 text-white">
                    <a href=""
                
                        className="mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[125px] before:w-16 before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500 ">
                        Home

                    
                </a>
                </div>
                <div  className="flex justify-center items-center mx-[auto] text-center text-2xl my-14 text-white">
                    <a href=""
                    className="mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[268px] before:w-[87px] before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    Services 
                    </a>
                </div>
                <div className="mx-[auto] text-center text-2xl my-14 text-white">
                    <Link to="contact"
                        className="mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[413px] before:w-[80px] before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                        Contact
                    </Link>
                </div>
                <div className="text-center mx-[auto] text-2xl my-14 text-white"> 
                    <a href=""
                    className="mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[557px] before:w-16 before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    About
                    </a>
                
                </div>
            </div> 
            <h2 className=" text-black font text-3xl font-semibold hover:underline mx-11 my-5 ">Logo</h2>
            <nav className=" ml-[30rem] xl:ml-[45rem] text-black font-semibold flex px-10    ">
                <a href=""
                    className="hidden lg:block mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[44px] before:w-[45px] before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    Home
                </a>
                <a href=""
                    className="hidden lg:block mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[44px] before:w-[57px] before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    Services
                </a>
                <a href=""
                    className="hidden lg:block mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[44px] before:w-[57px] before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    Contact
                </a>
                <a href=""
                    className="hidden lg:block mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[44px] before:w-[45px] before:bg-black before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    About
                </a>
                
            </nav>
            <span className="icon"></span>
        </header>
        <div className="bg-transparent flex justify-center items-center w-[100vw] h-[100vh]">

            <div className=" mx-[auto] wrapper h-[65] w-[370px] mt-16 border-2 border-solid border-[rgba(0, 0, 0, 0.5)] backdrop-blur-[20px] rounded-xl flex justify-center items-center">
                <div className="section ">
                    
                    <h2 className=" text-3xl text-center mt-12 font-bold">Register</h2>
                    <form className="input">
                        <div className=" relative w-[100%] h-[50px] border-b-2 border-black border-solid my-[30px] mx-[auto]">
                            <input onChange={(e)=>{setName(e.target.value)}} type="text" required className="w-[100%] h-[100%] bg-transparent border-none outline-none peer"></input>
                            <label className="absolute top-[50%] left-[5px] translate-y-[-50%] pointer-events-none peer-focus:-top-[5px] peer-valid:-top-[5px] duration-500" >Name</label>
                        </div>
                        <div className="email relative w-[100%] h-[50px] border-b-2 border-black border-solid my-[30px] mx-[auto]">
                        
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="text" required className="w-[100%] h-[100%] bg-transparent border-none outline-none peer "></input>
                            <label className="absolute top-[50%] left-[5px] translate-y-[-50%] pointer-events-none peer-focus:-top-[5px] peer-valid:-top-[5px] duration-500">Email</label>
                        </div>
                        <div className="email relative w-[100%] h-[50px] border-b-2 border-black border-solid mt-[30px] mb-[12px] mx-[auto]">
                            
                            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" required className="w-[100%] h-[100%] bg-transparent border-none outline-none peer"></input>
                            <label className="absolute top-[50%] left-[5px] translate-y-[-50%] pointer-events-none peer-focus:-top-[5px] peer-valid:-top-[5px] duration-500">Password</label>
                        </div> 
                        <div className="remember-forgot mb-2">
                            
                            <a href="" className="hover:underline hover:underline-offset-1 hover:text-violet-950">Forgot Password?</a>
                            
                        </div>
                        <button onClick={submitCredentials} className="w-full h-12 border-2 border-solid rounded-md bg-black border-white transition-all duration-500 text-white hover:bg-white hover:text-black text-lg">Register</button>
                    </form>
                    
                    <div className="register mt-2 mb-9">
                        <p>Already have an account? <Link to="/login" className="hover:underline hover:underline-offset-1 hover:text-violet-950">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
