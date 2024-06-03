import React from "react";
import { Link } from "react-router-dom"; 
import Aboutme from "./aboutme";

export default function Header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <form>
                <input type="text" placeholder="Find books here" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}