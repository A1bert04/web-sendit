import React from "react";
import { Navbar } from "../SharedComponents/Navbar";
import { Footer } from "../SharedComponents/Footer";
import { useState, useEffect } from "react"
import LoginIcon from "./assets/undraw_world_re_768.svg"
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export function SignUp(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mail, setMail] = useState("");
    const [pw, setPw] = useState("");
    const [pwrepeat, setPwrepeat] = useState("");
    const [accepted, setAccepted] = useState(false);
    const [valid, setValid] = useState(false);

    function checkPw(e){
        const val = e.target.value
        console.log(val.length, e.target.minLength);
        if (val.length < e.target.minLength){
            e.target.setCustomValidity("La contraseña es demasiado corta")
        } else{
            e.target.setCustomValidity("Este campo es obligatorio")
        }
    }


    return (
        <>
            <Navbar />
            <div className="lg:absolute lg:pt-20 pt-16 top-16 sm:bottom-14 bottom-28 w-full flex flex-col md:px-20 px-6 font-main lg:min-h-0 min-h-screen select-none">
                <div className="flex lg:flex-row flex-col w-full">
                    <div className="flex flex-col lg:w-1/2 w-full h-auto ml-24">
                        <div className="flex flex-row justify-start pt-3 font-main -ml-4">
                            <Link to="/login"><div className={`ml-12 text-black text-lg cursor-pointer hover:text-purple1 hover:font-semibold`}>Log In</div></Link>
                            <div className={`ml-12 font-bold text-purple1 text-lg cursor-pointer`}>Sign Up</div>
                        </div>
                        <div className="w-96 h-1.5 bg-gray2 absolute top-[8rem]">
                            <div className="relative h-full w-28 ml-28 bg-purple2 "></div>
                        </div>
                        <div className="flex flex-col relative mt-12 lg:ml-24">
                            <form autoComplete="off">
                                <label htmlFor="name" className="text-main block mt-8">Nombre <span className="text-main text-red1">*</span></label>
                                <input type="text" name="name" className="border-b-2 block" required onChange={(e) => setName(e.target.value)} onInvalid={(e) => e.target.setCustomValidity('Este campo es obligatorio')} onInput={(e) => e.target.setCustomValidity('')}></input>
                                
                                <label htmlFor="surname" className="text-main block mt-8">Apellidos <span className="text-main text-red1">*</span></label>
                                <input type="text" name="surname" className="border-b-2 block" required onChange={(e) => setSurname(e.target.value)} onInvalid={(e) => e.target.setCustomValidity('Este campo es obligatorio')} onInput={(e) => e.target.setCustomValidity('')}></input>
                                
                                <label htmlFor="email" className="text-main block mt-8">Correo Electrónico <span className="text-main text-red1">*</span></label>
                                <input type="email" name="email" className="border-b-2 block" required onChange={(e) => setMail(e.target.value)} onInvalid={(e) => e.target.setCustomValidity('Introduce un correo electrónico válido')} onInput={(e) => e.target.setCustomValidity('')}></input>
                                
                                <label htmlFor="pw" className="text-main block mt-8">Contraseña <span className="text-main text-red1">*</span></label>
                                <input type="password" name="pw" className="border-b-2" required onChange={(e) => setPw(e.target.value)} minLength={6} onInvalid={(e) => checkPw(e)} onInput={(e) => e.target.setCustomValidity('')}></input>
                                
                                <label htmlFor="pwrepeat" className="text-main block mt-8">Repetir Contraseña <span className="text-main text-red1">*</span></label>
                                <input type="password" name="pwrepeat" className="border-b-2" required minLength={6} onInvalid={(e) => checkPw(e)} onChange={(e) => setPwrepeat(e.target.value)} onInput={(e) => e.target.setCustomValidity('')}></input><br></br>
                                {(pwrepeat != pw && pwrepeat != "") && <><span className="text-red1">Las contraseñas deben ser iguales</span><br></br></>}

                                <input type="checkbox" name="checkTerms" className="inline-block mt-8" required onInvalid={(e) => e.target.setCustomValidity('Este campo es obligatorio')} onInput={(e) => e.target.setCustomValidity('')}></input>                                
                                <label htmlFor="checkTerms"> Acepto los <span className="text-purple1 font-main underline cursor-pointer">términos de servicio</span> <span className="text-main text-red1">*</span></label>

                                <input type="hidden" onSubmit={() => setValid(pw == pwrepeat)}></input>
                                <input type="submit" value="Sign Up" className="block mt-8 bg-purple1 font-main text-white px-4 py-1 rounded-full font-semibold drop-shadow-xl hover:hue-rotate-15"/>
                            </form>
                        </div>
                    </div>
                    <div className="flex-col lg:flex hidden lg:w-1/2 h-auto lg:mt-10">
                        <img src={LoginIcon} alt="Login page icon" className=" xl:max-h-96 lg:max-h-80 xl:mt-0 lg:mt-10 mt-20" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}