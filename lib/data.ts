import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/First Project.png";
import rmtdevImg from "@/public/untitled.png";
import third from "@/public/third.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Fashion Shop",
    description:
      "Full E Commerce shop Websiteو You can buy products and add it to Cart and sign in and logout with Firebase authentication. ",
    tags: ["React", "FireBase", "Tailwind", "straipe", "And Others"],
    imageUrl: corpcommentImg,
    link: "https://github.com/MuhammadAli34/Fashion-Shop",
  },

  {
    title: "RealTime-Chat-App",
    description:
      "Full realtime chatapp with mern stack mongoDb,express,reactjs,node js and socket.io and a lot of other technology.",
    tags: ["MERN-STACK", "styled-components", "socket.io"],
    imageUrl: third,
     link: "https://github.com/MuhammadAli34/Mern-Chat-App",
  },
  {
    title: "E-commerce",
    description:
      "Full E Commerce shop Website.",
    tags: ["React"],
    imageUrl: rmtdevImg,
     link: "https://github.com/MuhammadAli34/E-commerce",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Familiar with Next.js",
  "Tailwind",
  "Familiar with MERN STACK",
  "ReduxToolKit",
] as const;
