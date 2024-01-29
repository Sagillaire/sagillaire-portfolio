import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { ContactsProps, NavLink, ProjectProps, ServiceProps, countUpItemsProps } from "@/types";

import { FaAngular, FaAws, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";

const navLinks: NavLink[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    // { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
    { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113 },
    { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
    { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
    { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313 },
];

const countUpItems: countUpItemsProps[] = [
    {
        id: 1,
        number: 9,
        text: "Years of Experience",
    },
    {
        id: 2,
        number: 178,
        text: "Satisfied Customers",
    },
    {
        id: 3,
        number: 742,
        text: "Design Items",
    },
    {
        id: 4,
        number: 112,
        text: "Clients Served",
    },
];

const projects: ProjectProps[] = [
    {
        id: 1,
        img: "/project-pokedex.png",
        name: "Pokemon Pokedex",
        project_url: 'https://pokedex-seven-sandy.vercel.app/',
        github_url: 'https://github.com/Sagillaire/app_poke',
        tools: ['NextJs', 'Styled Components', 'TypeScript'],
    },
    {
        id: 2,
        img: "/x.com_clone.png",
        name: "X / Twitter UI: In progress..",
        project_url: 'https://x-com-clone-ui.vercel.app/',
        github_url: 'https://github.com/Sagillaire/x.com_clone_ui',
        tools: ['NextJs', 'Tailwind', 'TypeScript'],
    },
    {
        id: 3,
        img: "/purple.png",
        name: "Comming soon...",
        project_url: '',
        github_url: '',
        tools: [],
    },
    {
        id: 4,
        img: "/blue.png",
        name: "Comming soon...",
        project_url: '',
        github_url: '',
        tools: [],
    },
];

const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-400" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "ReactJS", icon: FaReact, color: "text-blue-400" },
    { name: "NextJS", icon: TbBrandNextjs, color: "text-slate-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "NodeJS", icon: FaNode, color: "text-green-400" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
    { name: "GitHub", icon: FaGithub, color: "text-slate-400" },
    { name: "Styled Components", icon: SiStyledcomponents, color: "text-pink-400" },
    { name: "Angular", icon: FaAngular, color: "text-red-400" },
    { name: "AWS", icon: FaAws, color: "text-orange-400" },
];

const contacts: ContactsProps[] = [
    { id: 1, title: "Address", text: "AungThaPyay 2 Road, TharKayTa,Yangon" },
    { id: 2, title: "Phone", text: "+959-883-271-929" },
    { id: 3, title: "Email", text: "yelinko.2002@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };