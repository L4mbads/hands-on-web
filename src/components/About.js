import React from "react";
import "./About.css";
import profile from "../assets/profile.png";


export default function About() {
    return (
        <section id="about">
            <div className="bgImage">
                <div className="container  mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hello!
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed text-white">
                            I'm Fachriza Ahmad Setiyono, you can call me Riza. I do Minecraft photography and I like graphics programming.
                        </p>
                        <p className="text-xs max-sm:hidden">
                            fun fact: the background you're seeing is Minecraft
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="profile"
                            src={profile}
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}