import ViewPrograms from "../components/landing/ViewPrograms";
// import t from "../assets/landing/tiimat/iphonex.jpg";
import IconCard from "../components/landing/IconCard";

import About from "../components/About";
import { Link } from "react-router-dom";
import LandingModal from "../components/landing/LandingModal";
// import sc from "scrollreveal";
import { useEffect } from "react";
import Learning from "../components/landing/Learning";


export default function Landing() {
    useEffect(()=>{
        // sc().reveal(".reveal-0",  {duration:1000, delay: 200, distance:"80px", origin:"top" })
        // sc().reveal(".reveal-1",  {duration:1000, delay: 400,easing: 'cubic-bezier(0.5, 0, 0, 1)', distance:"80px", origin:"top" })
        // sc().reveal(".fromTop", {duration:1000, delay: 200, distance:"80px", origin:"top" })
        // sc().reveal(".fromBottom", {duration:1000, delay: 200, distance:"80px", origin:"bottom" })
        // sc().reveal(".fromLeft", {duration:1000, delay: 200, distance:"80px", origin:"left" })
        // sc().reveal(".fromRight", {duration:1000, delay: 200, distance:"80px", origin:"right" })
        // sc().reveal(".fromScale", {duration:1000, delay: 200, distance:"80px", origin:"right", scale:1 })
    },[])
    return (
        <>
            <section id="hero" className="  ">
                <div className="relative  h-full">
                    <div className="relative h-screen md:h-[540px] flex pb-12  gap-6 flex-col justify-end  items-start md:justify-center md:items-start">
                        <img
                            src={"https://cdn.pixabay.com/photo/2020/06/04/11/10/bulb-5258341_1280.jpg"}
                            alt=""
                            width={10000}
                            height={10000}
                            className=" block top-0 bottom-0 left-0 right-0 h-full w-full object-cover absolute"
                        /> 
                        <div className=" z-10 min-h-[250px]  text-pretty p-4 flex flex-col max-w-2xl text-white md:min-h-[400px] md:translate-y-24 md:justify-start md:items-start md:gap-4 md:ps-12">
                            <h2 className=" fromBottom text-zinc-100 font-medium md:text-5xl text-3xl tracking-tight leading-snug ">
                                Kickstart Your <br /> Career Journey With <br />{" "}
                                <span className="py-1 leading-snug tracking-2 block font-bold text-indigo-500 text-4xl  md:text-6xl">
                                    Tiimat Solutions
                                </span>
                            </h2>
                            <p className=" fromBottom block mb-4 text-xs md:text-sm text-zinc-300">
                                Delivering high-quality, innovative educational programs that
                                empower individuals with the skills and knowledge to drive
                                meaningful change and impact in a globally connected world.
                            </p>
                            <Link to={"/faculty"} className="fromBottom text-xs md:text-sm group hover:translate-y-2 transition duration-500 hover:text-white px-16 bg-indigo-700 hover:bg-gradient-to-l from-black to-indigo-900 hover:opacity-70  h-10 md:h-12 rounded-xl text-white flex gap-1 justify-center items-center">
                                Explore our Programmes{" "}
                                <span className="group-hover:translate-x-2 transition duration-500 delay-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        fill="#fff"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 48 48"
                                    >
                                        <path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="md:p-4 ">
                        <div className=" md:grid md:grid-cols-2 md:px-16 md:pt-6">
                            {
                                [<IconCard  name="Experienced Faculty" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABgUlEQVR4nN2VPUsDQRCG38JPiLndjVYKKv4AK0P+gYWFYmunnRDEQkQUZhYTW8WQIppaExu/NcH432TNnlkuueTuMIUuDBw3e+9z8+4wC/z7pUA5Ba4r6JoCZYcA0DUJ/jShQLUhAOjOBwjw7TAAOQm+txVsJray3wYF2m4DeCexleEbaESA845NrxJcyoA2TM7sSON0SYI/IgNsHHigBQWuBN7/hMkJ8JYCNaxww4hnoFd6WZQ1EAG6UeD3bkEqTOEskwJNS3AxkG8p8B6QHw+zMAArzCrQlStihP18Ckczbk6AdhF3GZ+jAiToMgngOWBD0UCseMAieooNEKC3sMPtES9JKig7AucCJ8vzoIk57E+aZwm6cPKlBAC96vR1ujt/6HUOWa/HBpiWlODmIHsU+BqojMYS90BCQletyCDIo4fjxUjC/jzqiOpqu5Jvu8r24B9MW0roNQUm20WtSPdFYFw0TSX9f4nG3G4beF8kuVxUnG/8eRQ6sPA73/yt9QWIWfgNn95TxgAAAABJRU5ErkJggg==" alt="customer-insight" /> </IconCard>
                                   , <IconCard name="industrial partnership" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                                        <g fillOpacity="0.74118" fill="#120080" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8,8)"><path d="M16,3c-6.143,0 -11.28867,4.28839 -12.63867,10.02539l0.01563,-0.00586l11.55859,-3.33008c1.809,-0.527 2.82081,-0.60478 4.13281,-0.42578c1.888,0.318 2.74441,1.30086 3.19141,2.88086l0.56445,1.96875c0.427,1.461 0.05153,2.63294 -1.23047,3.83594c-1.004,0.904 -1.62117,1.27152 -3.20117,1.72852l-4.82031,1.38086l11.47852,1.41211l0.50586,1.77734l-2.50391,0.69727l-14.93555,-1.93945l1.16992,4.10547c1.962,1.191 4.25489,1.88867 6.71289,1.88867c7.168,0 13,-5.832 13,-13c0,-7.168 -5.832,-13 -13,-13zM18.03906,11.73047c-0.53543,-0.00586 -1.27359,0.12969 -2.30859,0.42969l-9.86133,2.83008l1.5,5.16992l10.37109,-3c2.41,-0.69 2.60055,-1.22953 2.31055,-2.26953l-0.58984,-2.06055c-0.2,-0.6875 -0.52949,-1.08984 -1.42188,-1.09961zM3.00781,16.13281c0.025,2.448 0.73445,4.72973 1.93945,6.67773z"></path></g></g>
                                    </svg></IconCard>,
                                    <IconCard name="Modern Facility"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+UlEQVR4nO1W30tUQRg9lWI/bPfO7KpJkgRSUYIPFRH9CT1ED0EPBYIaSRj5kpTamWuakEVtRrEUPURUmKYRVpb9b/HtnWFvu3Pv7paCD34wsHvv9+N853wzc4Ft26rWCuY12K9g5hW4omDWFLiowUcKvJwFA+ebxaySZxrmsfhEvmZZYiXHfjzINVCaOwOYqzbJ76QVwKwGmLwQLX5L89XgjwC8IrlrFL+0S4HGBv4KwLt5TJ1UGMsCxWYNdimEZzUMK4qsa/CeRnhG2IjyjGVz4KkAZlyB6xEQw1QQCrwWJeRKgIm+dKCm4JhQCM+ltRVgqs/KKLkHE5zudyuYn7I0eDw5HZtiDHxVYG9a8XJzUyeE1agGD3kAmBtWr1vJaYrNCpy2xVdy4LEo+VhWgbcVzJIGFyRXN7i7MlrDjNrYYQ/C8LUFkNi9ghmyCT5nwB551gYeUOA7z5C+bANbPSzILLzyMMDSJHdhdE8SAI1wQXzy4JHoP7s0+NEWnW/FnTahV4Fvo2fh805wr4uX325uPADMqrzsQaGlFgDRXUAomE+2+JN4IQvEssJnrik5D9zseOjlG3npdPVLwMFqqvnQB7odMx0B+N4BlJnIYfK0laDoY2DE0jMSDZsZko6jrmXrsEmW/P77ebE5CXAe050aYUkiDTOnYGYsK9ernLMYP2wPDDlyn1afZmYgqVA1U+F5DWbKc+KkK601jemD3kAN3ow5LkU6s9fujoV6imuEF+0AvujA3L4IUGkwF20joynhIy0a5nt80nOYOFpmIS6H3zKgLu8CU3DnQSzPbA36zLKbdBu0VI8ccdo7wPYA5oMbUjkPHJPCTC0Aw54bLVUOH+2ic0z7tfKFxP5UAIhNugNQS44k2u1Z4Zr4IpddmnxVJp3WK0ecdvkwkQ+WCsZ2oFHTMAONyFFB+z9t4f+WI057PbumbovfA8lyyDdkY+dG3ea7Byrl2CDaN04ObJbpRDk8l8xmmPLLMZt2M26wsaFredu2tP0Bv5zHFlV+0UUAAAAASUVORK5CYII=" alt="handshake-heart" /></IconCard>
                                    ,<IconCard name="Student Support Service"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nN2UTUscQRCGX4kfB8Xp7lU8LCaRBJNcIhj0n4gexYQQ4wfBHARdqJqsB8VTLgGDi5cFlxBEWYmu2f1vUnQP26OzYw+5JClomOmqfp+qmuoB/muLsDtlQJsafKLBLQ2+0OCaAq1r0OM/kD4aMIg3NaitwZ0eq63AawANFhSnfoV4X0QM+EqBPpZALxPhEiovNHhVfPKuwAeFIBr03orTj1FUn3X3LSB5j0BPFfjUQdaCxA12yq7XN2Og6TQ4DfC+0bW0UqH6JCT7d1aItu77+B5ATLIPrkKDvtlgeh0KMKi8ci39HgDgpgRP4HDY349AswlAntOnaFBaqsG/ZQByAQr0y2a5MXSnsnp3PKmeUfkHN3VHwMKjnAoSoeqkv28QN7z5b0Ug5fuf4+uQl8RiDoC3XT+X0wCadxCZsI5GfOxDDGhFg8+6VfQwe4moLZfIYK981y+iIp5UYsBvXWKdRHwMX970BLjgzy74MMtvIUkl3PQBCLFx0IgG/bTjWpnJipHMNfhSWlMYYA/QkvsWn8LiCwIiVKfcoVqeoL8MqBEMkIvmDp6HAES8hHguGACgL/nnIwdQRPDBLHXG+rsB+FfsFtLC2EbHCqkFAAAAAElFTkSuQmCC" alt="customer-support" /></IconCard>].map((card, e)=>{
                                        if(e%2===0){
                                            return <div key={e} className={`fromRight`} >{card}</div>
                                        }else{
                                            return <div key={e} className={`fromLeft`} >{card}</div>
                                        }
                                        
                                    })
                            }
                        </div>
                        <Learning />
                        <About />
                        <ViewPrograms />
                    </div>
                    
                </div>
                <LandingModal />
            </section>
        </>
    );
}
