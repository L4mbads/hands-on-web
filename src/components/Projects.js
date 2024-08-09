import React from "react";
import { useState } from 'react';
import shader1 from "../assets/projects/shader1.png";
import shader2 from "../assets/projects/shader2.png";
import shader3 from "../assets/projects/shader3.png";
import game1 from "../assets/projects/game1.png";
import game2 from "../assets/projects/game2.png";
import game3 from "../assets/projects/game3.png";


function mod(n, m) {
    // negative modulo fix
    return ((n % m) + m) % m;
}

const shaderImages = [
    shader1,
    shader2,
    shader3,

];

const gameImages = [
    game1,
    game2,
    game3,
];

function ImagesComponent(props) {
    const [selectedImage, setImage] = useState(0);
    const nextImage = () => {
        setImage(mod(selectedImage + 1, props.images.length));
    }
    return (
        <img
            src={props.images[selectedImage]}
            alt="Example"
            className="aspect-video lg:aspect-square lg:w-1/2 lg:h-screen object-cover"
            onClick={nextImage}
        />
    )

}

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 body-font">
            <div className=" py-20 text-center bg-slate-950 ">
                <div className="flex flex-col w-full mb-2">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Projects
                    </h1>
                    <p className="mx-auto leading-relaxed text-base">
                        These are the projects that showcase my skills.
                        Click on the images to view the next one.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-white">
                <ImagesComponent images={shaderImages} />
                <div className="w-full lg:w-1/2 p-8 ">
                    <h2 className="text-2xl font-bold text-black">Minecraft Raytraced Shader</h2>
                    <p className="mt-8 text-lg text-gray-600 text-justify">
                        A real-time raytraced shader with photorealistic lighting including
                        world-space diffuse lighting and reflection,
                        made possible with temporal resampling and a spatio-temporal filter,
                        combined with a fast irradiance estimation. Along with other features
                        such as Temporal Anti Aliasing (TAA), bloom, volumetric lighting, and
                        more.
                        <br />
                        <br />
                        Thanks to Iris Shaders mod,
                        I didn't have to mess with the internal Minecraft rendering pipeline and instead,
                        let Iris Shaders inject the GLSL code into Minecraft.
                        Sadly, the language Minecraft is coded in, Java,
                        makes it not possible to use hardware acceleration RT.
                        <br />
                        <br />
                        Nevertheless, it was a huge experience for me because i learnt a lot
                        of thing regarding real-time PBR rendering.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between bg-gray-900">
                <ImagesComponent images={gameImages} />
                <div className="w-full lg:w-1/2 p-8 ">
                    <h2 className="text-2xl font-bold text-white">Democrussy</h2>
                    <p className="mt-8 text-lg text-gray-400 text-justify">
                        The GIMJAM 2024 1st place winner, Democrussy is a strategy-card game mixed with some visual novel element to better narrate its epic storyline.
                        <br />
                        <br />
                        In a galaxy far, far away--namely, Susu Kotak Galaxy... After a massive land dispute between the citizens of planet Idgafnesia, Warlok and Magna-Aim, a prophecy has been foretold by a Dukun that ended this major conflict.
                        "A worthy leader shall be born in the highest peak of Idgafnesia, and they shall bring all conflict to an end" said the Dukun before he vanished.
                        You ARE the prophecy. Show the citizens of Idgafnesia that you are worthy!
                        Embark on an epic journey to become the next generation leader of Idgafnesia and continue to maintain peace and harmony on this planet!
                        Developed in Unity
                        <br />
                        <br />
                        The game was developed only in a single week by sucipto team. Our good team discipline and teamwork is what
                        has made this possible.

                    </p>
                </div>
            </div>
        </section>
    );
}