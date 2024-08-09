import React from "react";
import { useState } from 'react';
import Arrow from "../assets/arrow.png";
import "./Hobby.css";
import image1 from "../assets/photography/1.png";
import image2 from "../assets/photography/2.png";
import image3 from "../assets/photography/3.png";
import image4 from "../assets/photography/4.png";
import image5 from "../assets/photography/5.png";
import image6 from "../assets/photography/6.png";
import image7 from "../assets/photography/7.png";
import winner1 from "../assets/photography/winner1.png";
import winner2 from "../assets/photography/winner2.png";
import winner3 from "../assets/photography/winner3.png";

export const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
]

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
                src={images[selectedImage]}
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
                    <p className="mx-auto leading-relaxed text-xs sm:text-sm text-gray-500">
                        Shots taken in cinematic aspect ratio (2.39:1)
                    </p>
                </div>
                <div className="flex flex-col w-full mt-20">
                    <p className="mx-auto leading-relaxed text-base lg:text-lg text-justify">
                        I use shaders and textures that make use of
                        <a href="https://en.wikipedia.org/wiki/Physically_based_rendering" className="text-green-500 hover:text-green-900"> Physically Based Rendering</a>
                        <b> (PBR)</b> system, which allows realistic light behaviour within the game.
                        This inspires me to delve deeper into graphics programming world,
                        mainly focused on light transport.
                    </p>
                </div>
                <div className="imageContainer relative container mx-auto mt-20 aspect-video">
                    <img
                        src={winner1}
                        className="imageObject object-cover">

                    </img>
                </div>

                <div className="flex flex-col w-full my-2">
                    <p className="mx-auto leading-relaxed text-xs sm:text-sm text-gray-500">
                        This shot wins me in my first ever screenshot contest!
                    </p>
                </div>
                <div className="flex flex-col w-full mt-5 md:mt-10 pb-5 md:pb-10">
                    <p className="mx-auto leading-relaxed text-base lg:text-lg text-justify">
                        After a few days experimenting with my newfound hobby, I decided to join my first ever screenshot contest.
                        And surprisingly, my shot got placed in top 3 based by voting!
                    </p>
                </div>
                <div className="imageContainer relative container mx-auto mt-20 aspect-video">
                    <img
                        src={winner2}
                        className="imageObject object-cover">

                    </img>
                </div>
                <div className="flex flex-col w-full my-2">
                    <p className="mx-auto leading-relaxed text-xs sm:text-sm text-gray-500">
                        This one also wins me in my second contest!
                    </p>
                </div>
                <div className="flex flex-col w-full mt-5 md:mt-10 pb-5 md:pb-10">
                    <p className="mx-auto leading-relaxed text-base lg:text-lg text-justify">
                        In my second contest, i tried to go very different than my usual style.
                        I tried to capture an old-vintage look with the post processing.
                        I'm so glad my shot got in top 3!
                    </p>
                </div>


                <div className="imageContainer relative container mx-auto mt-20 aspect-video">
                    <img
                        src={winner3}
                        className="imageObject object-cover">

                    </img>
                </div>

                <div className="flex flex-col w-full my-2">
                    <p className="mx-auto leading-relaxed text-xs sm:text-sm text-gray-500">
                        And this one also wins me in my last contest!
                    </p>
                </div>
                <div className="flex flex-col w-full mt-5 md:mt-10 ">
                    <p className="mx-auto leading-relaxed text-base lg:text-lg text-justify">
                        And finally in my latest contest, I managed to get the first place!
                        The theme of the contest was like small room, and suddenly my mind
                        just thought of an abandoned-apocalyptic kind of room. So i actually
                        did build the room there on my own. It was really fun.
                    </p>
                </div>


            </div>
        </section>
    );
}