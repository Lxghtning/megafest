import React , {useState} from 'react'

export default function Contact() {
    //Css of navmenu


    //change navmenu to close and vice versa
    const[content, setContent] = useState("menu");
    const change = ()=>{
        content==="menu"? setContent("close"):setContent("menu");
    }
  return (
    <div
        className="w-[100vw] h-[100vh] bg-[url('https://images.unsplash.com/photo-1688408958818-87ab7f118246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-no-repeat bg-center bg-cover min-h-[100vh] min-w-full m-0">
        <header className="  bg-black/50 top-0 h-[10vh] w-[100vw] mx-0 flex justify-between items-center lg:flex-row flex-col"> 
            <div className="lg:hidden backdrop-blur-[30px] h-[100%] w-[100vw] z-50 absolute flex justify-center flex-col">
                <span id="navmenu" onClick={change} className="material-symbols-outlined cursor-pointer mr-6 absolute top-8 right-4 text-white text-3xl">
                    {content}
                    </span>
                
                <div className="flex justify-center text-center text-2xl my-14 text-white">
                    <a href=""
                
                        className="mx-4">
                        Home    
                    </a>
                </div>
                <div  className="flex justify-center items-center mx-[auto] text-center text-2xl my-14 text-white">
                    <a href=""
                    className="mx-4">
                    Services 
                    </a>
                </div>
                <div className="mx-[auto] text-center text-2xl my-14 text-white">
                    <a href=""
                        className="mx-4 ">
                        Contact
                    </a>
                </div>
                <div className="text-center mx-[auto] text-2xl my-14 text-white"> 
                    <a href=""
                    className="mx-4">
                    About
                    </a>
                </div>
            </div> 
            <h2 className=" text-white font text-3xl font-semibold hover:underline mx-11 my-5 ">Logo</h2>
            <nav className=" ml-[28rem] xl:ml-[43rem] text-white font-semibold flex px-10 items-center    ">
                <a href=""
                    className="hidden lg:block mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[6%] before:w-[45px] before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    Home
                </a>
                <a href=""
                    className="hidden lg:block mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[6%] before:w-[57px] before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    Services
                </a>
                <a href=""
                    className="hidden lg:block mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[6%] before:w-[57px] before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    Contact
                </a>
                <a href=""
                    className="hidden lg:block mx-4 before:content-[''] before:h-[3px]  before:rounded-sm before:absolute before:top-[6%] before:w-[45px] before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition before:duration-500">
                    About
                </a>
                
            </nav>
            <span className="icon"></span>
        </header>
        <div className="bg-transparent flex justify-center items-center w-[100vw] h-[90vh]">

            <div className=" mx-[auto] wrapper h-[70%] w-[400px] mt-16 border-2 border-solid border-[rgba(0, 0, 0, 0.5)] backdrop-blur-[20px] rounded-xl flex justify-center items-center">
                <div className="section ">
                    
                    <h2 className=" text-3xl text-center mt-12 font-bold">Contact Us Form</h2>
                    <form className="input">
                        
                        <div className="email relative w-[100%] h-[50px] border-b-2 border-black border-solid my-[30px] mx-[auto]">
                            <span></span>
                            <input type="text" required className="w-[100%] h-[100%] bg-transparent border-none outline-none peer "/>
                            <label className="absolute top-[50%] left-[5px] translate-y-[-50%] pointer-events-none peer-focus:-top-[5px] peer-valid:-top-[5px] duration-500" autocomplete="off">Email</label>
                        </div>
                        <div className= "relative w-[100%] h-[50px] border-b-2 border-black border-solid my-[30px] mx-[auto]">
                            <textarea  required name="" id="" cols="30" rows="1" className=" resize-none w-[100%] h-[100%] bg-transparent border-none outline-none peer "></textarea>
                            <label className="absolute top-[50%] left-[5px] translate-y-[-50%] pointer-events-none peer-focus:-top-[5px] peer-valid:-top-[5px] peer-valid:scale-0 duration-500" required >Write about your problem</label>
                        </div>
                        <button className="w-full h-12 border-2 border-solid rounded-md bg-black border-white transition-all duration-500 text-white hover:bg-white hover:text-black text-lg">Submit Now</button>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    </div>

  )
}
