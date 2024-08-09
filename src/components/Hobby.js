import React from "react";
import { images } from "../photography";
import { useState } from 'react';
import "./Hobby.css";

function ImagesComponent() {
    const [selectedImage, setImage] = useState(0);
    const nextImage = () => {
        setImage((selectedImage + 1) % images.length);
        console.log(selectedImage);
    }
    return (
        <div className="imageContainer relative container mx-auto aspect-[2.39/1] border border-red-500">
            <img
                src={images[selectedImage].image}
                className="imageObject object-cover">

            </img>
            <img
                alt="sdaf"
                onClick={nextImage}
                className="imageButton absolute bottom-0 right-0">
            </img>
        </div >
    )

}

export default function Projects() {
    return (
        <section id="hobby" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 pt-20 pb-20 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20 border">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Virtual Photography
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I take pictures in Minecraft. I started around 2021 without any knowledge on
                        photography beforehand.
                    </p>
                </div>

                <ImagesComponent></ImagesComponent>



            </div>
        </section>
    );
}