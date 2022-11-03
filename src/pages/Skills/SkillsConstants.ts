// Icons
import react from "../../assets/icons/react.svg";
import java from "../../assets/icons/java.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import javascript from "../../assets/icons/javascript.svg";
import typescript from "../../assets/icons/typescript.svg";
import c from "../../assets/icons/c.svg";
import mysql from "../../assets/icons/mysql.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import material from "../../assets/icons/material-ui.svg";
import node from "../../assets/icons/node.svg";
import firebase from "../../assets/icons/firebase.svg";
import circleci from "../../assets/icons/circleci.svg";
import docker from "../../assets/icons/docker.svg";
import git from "../../assets/icons/git.svg";
import go from "../../assets/icons/go.svg";
import postgresql from "../../assets/icons/postgresql.svg";

type SkillsType = Array<{
    icon: string;
    name: string;
}>;

export const languages: SkillsType = [
    {
        icon: java,
        name: "Java",
    },
    {
        icon: go,
        name: "Golang",
    },
    {
        icon: html,
        name: "HTML",
    },
    {
        icon: css,
        name: "CSS",
    },
    {
        icon: javascript,
        name: "JavaScript",
    },
    {
        icon: typescript,
        name: "TypeScript",
    },
    {
        icon: c,
        name: "C/C++",
    },
];

export const technologies: SkillsType = [
    {
        icon: react,
        name: "React/Native",
    },
    {
        icon: postgresql,
        name: "PostgreSQL",
    },
    {
        icon: mysql,
        name: "MySQL",
    },
    {
        icon: docker,
        name: "Docker",
    },
    {
        icon: mongodb,
        name: "MongoDB",
    },
    {
        icon: material,
        name: "Material-UI",
    },
    {
        icon: node,
        name: "NodeJS",
    },
    {
        icon: firebase,
        name: "Firebase",
    },
];

export const tools: SkillsType = [
    {
        icon: circleci,
        name: "CircleCI",
    },
    {
        icon: git,
        name: "Git",
    },
];
