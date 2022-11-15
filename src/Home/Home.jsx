import React from "react";
import { Link } from 'react-router-dom'
import { Navbar } from '../SharedComponents/Navbar'
import { Footer } from '../SharedComponents/Footer'
import HomeImg from './Assets/Image1.svg'
import { useState, useEffect } from 'react'

export function Home() {
    const [clients, setClients] = useState(700)
    const [commerce, setCommerce] = useState(47)
    const [orders, setOrders] = useState(900)
    return (
        <>
            <Navbar />
            <div className="pt-16 bg-white w-full h-max flex flex-col">
                <div id="text-main" className="flex flex-row justify-around mt-12 flex-wrap-reverse w-full">
                    <div id="text-content" className="flex flex-col lg:w-4/12 w-full lg:mt-32 mt-10">
                        <div id="text" className="flex flex-col w-full h-max lg:tracking-wider tracking-wide font-bold lg:text-right text-center xl:test-9xl lg:text-4xl sm:text-3xl text-2xl font-main">
                            Nunca hemos <br></br> estado tan <span className="text-purple1">cerca</span>
                            <div className="float w-full mt-4">
                                <div className=" grid lg:place-content-end place-content-center">
                                    <div className="max-w-max px-5 font-main drop-shadow-lg border-purple1 hover:scale-105 font-semibold text-xl py-2 border-2 text-white bg-purple1 rounded-full cursor-pointer">
                                        <Link to="/about-us">¡Conócenos!</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="home-img" className="lg:-ml-44"><img src={HomeImg}></img></div>
                    
                </div> <br />  
                <div id="counters" className="w-full h-48 flex justify-around text-center xl:mt-48 lg:mt-36 mt-12 lg:scale-100 scale-75">
                    <div id="clientes" className="flex flex-col">
                        <div className="text-7xl font-numbers font-semibold">{clients}k</div>
                        <div className="font-main text-xl">Clientes satisfechos</div>
                    </div>
                    <div id="comercios" className="flex flex-col">
                        <div className="text-7xl font-numbers font-semibold">{commerce}</div>
                        <div className="font-main text-xl">Pequeños comercios</div>
                    </div>
                    <div id="pedidos" className="flex flex-col">
                        <div className="text-7xl font-numbers font-semibold">{orders}k</div>
                        <div className="font-main text-xl">Pedidos completados</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}