import React from "react";
import { useState } from 'react';
import shader1 from "../assets/projects/shader1.png";
import shader2 from "../assets/projects/shader2.png";
import shader3 from "../assets/projects/shader3.png";


function mod(n, m) {
    // negative modulo fix
    return ((n % m) + m) % m;
}

const shaderImages = [
    shader1,
    shader2,
    shader3,

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
            className="aspect-video lg:aspect-square lg:w-1/2 lg:h-auto object-cover mb-4 lg:mb-0"
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
                        I take pictures in Minecraft. I started around 2021 without any knowledge on
                        photography beforehand.
                    </p>
                </div>


            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-white">
                <ImagesComponent images={shaderImages} />
                <div className="w-full lg:w-2/3 p-8 ">
                    <h2 className="text-2xl font-bold text-black">Minecraft Raytraced Shader</h2>
                    <p className="mt-8 text-lg text-gray-600 xl:max-h-full max-h-96 overflow-y-auto text-justify">
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

                        Sadly, the language which Minecraft is coded in, Java,
                        makes it not possible for us to use hardware acceleration RT.
                        <br />
                        <br />
                        Nevertheless, it was a huge experience for me because i learnt a lot
                        of thing regarding real-time PBR rendering.
                    </p>
                </div>
            </div>
        </section>
    );
}