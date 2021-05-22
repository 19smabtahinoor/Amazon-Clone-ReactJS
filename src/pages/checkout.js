import Head from "next/head";
import Image from "next/image";
import React from 'react';
import { useSelector } from "react-redux";
import Header from '../components/Header'
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckOutProduct from '../components/CheckOutProduct'
import Currency from 'react-currency-formatter'


import {useSession } from "next-auth/client";
function checkout() {
    const [session] = useSession()
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon Checkout || Abtahi Noor</title>
                <link href="https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg" rel="icon" type="image/icon"></link>
            </Head>
            {/* header */}
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">
                
                {/* Left */}
                <div className="flex flex-col  m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                        alt="checkout Page Banner Image"
                    />
                    
                <div className="flex-grow p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b pb-4">
                        {items.length === 0 ? 'Your Amazon Busket is Empty' : 'Shopping Busket'}
                    </h1>

                    {items.map((item,index) => (
                        <CheckOutProduct
                            key={index}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                        />
                    ))}
                </div>
                </div>

                {/* Right */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                {items.length > 0 &&(
                    <>
                    <h2 className="whitespace-nowrap">Subtotal ({items.length} items) : 
                    <span className="font-bold">
                        <Currency quantity={total}/>
                    </span>

                    </h2>

                    <button 
                    disabled={!session}
                    className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "}`}>
                        {!session ? 'Sign in to checkout' : 'Procced to checkout'}
                    </button>
                    </>
                )}
                </div>
            </main>
        </div>
    );
}

export default checkout;