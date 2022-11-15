import React from "react";
import Twitter from "./assets/logo-twitter.svg";
import Facebook from "./assets/logo-facebook.svg";
import Instagram from "./assets/logo-instagram.svg";
import Github from "./assets/logo-github.svg";
import { Link } from "react-router-dom";

export function Footer() {
<<<<<<< HEAD
    
    return (
        <div className="bg-gray1 w-full sm:h-14 h-28 flex justify-around absolute bottom-0 self-center flex-wrap">
            
            <div className="flex text-center h-14 leading-[3.5rem] align-middle pt-3 md:w-56 w-48 justify-around">
                <a href="https://twitter.com" target="_blank"><img src={Twitter} className="fill-black md:w-8 md:h-8 w-7 h-7"></img></a>
                <a href="https://facebook.com" target="_blank"><img src={Facebook} className="fill-black md:w-8 md:h-8 w-7 h-7"></img></a>
                <a href="https://instagram.com" target="_blank"><img src={Instagram} className="fill-black md:w-8 md:h-8 w-7 h-7"></img></a>
                <a href="https://github.com" target="_blank"><img src={Github} className="fill-blackmd:w-8 md:h-8 w-7 h-7"></img></a>
=======
    return (
        <div className="bg-gray1 w-full sm:h-14 h-28 flex justify-around absolute bottom-0 self-center flex-wrap">
            <div className="flex text-center h-14 leading-[3.5rem] align-middle pt-3 w-40 justify-around">
                {/* TODO Añadir iconitos para cuando el tamaño sea inferior a lg */}
                <a href="https://twitter.com" target="_blank"><img src={Twitter} className="fill-black w-8 h-8"></img></a>
                <a href="https://facebook.com" target="_blank"><img src={Facebook} className="fill-black w-8 h-8"></img></a>
                <a href="https://instagram.com" target="_blank"><img src={Instagram} className="fill-black w-8 h-8"></img></a>
                <a href="https://github.com" target="_blank"><img src={Github} className="fill-black w-8 h-8"></img></a>
>>>>>>> fe3c35a (Some Assets)
            </div>
            <div className=" lg:self-auto sm:w-auto text-center leading-[3.5rem] align-middle h-14 w-full">
                <Link to="/about-us">About Us</Link> · LOPD · <Link to="/contact">Contacto</Link></div>
        </div>
    );
}