import React from "react";
import { images } from "../photography";
import { useState } from 'react';
import Arrow from "../assets/arrow.png";
import "./Hobby.css";

function mod(n, m) {
    // negative modulo fix
    return ((n % m) + m) % m;
}

function ImagesComponent() {
    const [selectedImage, setImage] = useState(0);
    const nextImage = () => {
        setImage(mod(selectedImage + 1, images.length));
    }
    const prevImage = () => {
        setImage(mod(selectedImage - 1, images.length));
    }
    return (
        <div className="imageContainer relative container mx-auto aspect-[2.39/1]">
            <img
                src={images[selectedImage].image}
                className="imageObject object-cover">

            </img>
            <img
                src={Arrow}
                alt="next"
                onClick={nextImage}
                className="imageButton opacity-50 hover:opacity-100 absolute right-0 size-1/12 rotate-180 object-scale-down  ">
            </img>
            <img
                src={Arrow}
                alt="prev"
                onClick={prevImage}
                className="imageButton opacity-50 hover:opacity-100 absolute left-0 size-1/12 object-scale-down  ">
            </img>
        </div >
    )

}

export default function Hobby() {
    return (
        <section id="hobby" className="text-gray-400 bg-gray-950 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full my-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Contact
                    </h1>
                    <p className="mx-auto leading-relaxed text-base">
                        You can contact me throught my email at rizacal.mamen@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
}