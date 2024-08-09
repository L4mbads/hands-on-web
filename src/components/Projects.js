import React from "react";

import shader from "../assets/projects/shader.png";



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
                <img
                    src={shader}
                    alt="Example"
                    className="w-full h-32 lg:w-1/2 lg:h-auto object-cover mb-4 lg:mb-0"
                />
                <div className="w-full lg:w-2/3 p-8 ">
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
                        Sadly, the language which Minecraft is coded in, Java,
                        makes it not possible for us to use hardware acceleration RT.
                        <br />
                        <br />
                        Nevertheless, it was a huge experience for me because i learnt a lot
                        of thing regarding real-time PBR rendering.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between bg-gray-900">
                <img
                    src={shader}
                    alt="Example"
                    className="w-full h-32 lg:w-1/2 lg:h-auto object-cover mb-4 lg:mb-0"
                />
                <div className="w-full lg:w-2/3 p-4 h-auto">
                    <h2 className="text-2xl font-bold">This is the Heading</h2>
                    <p className="mt-2 text-gray-600">
                        This is some example text that sits below the image on small screens. On larger screens, the text will be beside the image.
                    </p>
                </div>
            </div>
        </section>
    );
}