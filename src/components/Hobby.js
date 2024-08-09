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
        <div className="imageContainer relative container mx-auto aspect-[2.39/1]">
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

export default function Hobby() {
    return (
        <section id="hobby" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-20 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Virtual Photography
                    </h1>
                    <p className="mx-auto leading-relaxed text-base">
                        I take pictures in Minecraft. I started around 2021 without any knowledge on
                        photography beforehand.
                    </p>
                </div>

                <ImagesComponent></ImagesComponent>
                <div className="flex flex-col w-full my-2">
                    <p className="mx-auto leading-relaxed text-xs text-gray-500">
                        Shots taken in cinematic aspect ratio (2.39:1)
                    </p>
                </div>
                <div className="flex flex-col w-full mt-20 mb-20">
                    <p className="mx-auto leading-relaxed text-base lg:text-lg">
                        I use shaders and textures that make use of
                        <a href="https://en.wikipedia.org/wiki/Physically_based_rendering" className="text-green-500 hover:text-green-900"> Physically Based Rendering</a>
                        <b> (PBR)</b> system, which allows realistic light behaviour within the game.
                        This inspires me to delve deeper into graphics programming world,
                        mainly focused on light transport.
                    </p>
                </div>


            </div>
        </section>
    );
}