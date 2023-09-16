import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/First Project.png";
import rmtdevImg from "@/public/second project.png";
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
    name: "Experience",
    hash: "#experience",
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
  },

  {
    title: "RealTime-Chat-App",
    description:
      "Full realtime chatapp with mern stack mongoDb,express,reactjs,node js and socket.io and a lot of other technology.",
    tags: ["MERN-STACK", "styled-components", "socket.io"],
    imageUrl: third,
  },
  {
    title: "ToDoList",
    description:
      "beautiful ToDoList, designed with a React js, that allows adding, removing, modifying, or Underline finshed Tasks.",
    tags: ["React", "Tailwind"],
    imageUrl: rmtdevImg,
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
