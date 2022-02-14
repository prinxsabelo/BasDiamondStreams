import React from "react"
import { Link } from "gatsby"
const data = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "Our profile",
        url: "/#profile",
    },
    {
        id: 3,
        text: "What We Do",
        url: "/#services"
    },

    {
        id: 4,
        text: "projects",
        url: "/#projects",
    },

    {
        id: 5,
        text: "Hire machines",
        url: "/machines",
    },
    {
        id: 6,
        text: "Wall Brackets",
        url: "/wallbrackets",
    },

]

const tempLinks = data.map(link => {
    return (
        <li key={link.id}>
            <Link to={link.url} >{link.text}</Link>
        </li>
    )
})
// I KNOW WE CAN COMBINE IT !!!!!

const PageLinks = ({ styleClass, toggleSidebar }) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`} onClick={toggleSidebar}>
            {tempLinks}
        </ul>
    )
}
export default PageLinks;