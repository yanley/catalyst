import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import { UserContext } from "../context/UserContext";

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="Dashboard componentBox">
            <h1>Current Locum Vacancies</h1>

        </div>
    )
}

export function DashboardMessages(props) {
    const { username } = React.useContext(UserContext);

    return (
        <div className="DashboardMessages">
            <p>Welcome to your dashboard, {username}</p> //can we put something like this in the navbar when logged in?
        </div>
    )
}

export default Dashboard