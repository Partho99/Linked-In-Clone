import React from 'react';
import './Sidebar.css';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

const Sidebar = () => {

    const user = useSelector(selectUser);

    const recentItem = topic => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg'
                     alt='abc'/>
                <Avatar src={user.photoUrl} className='sidebar__avatar'>
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>who viewed you</p>
                    <h5 className='sidebar__statNumber'>2,543</h5>
                </div>
                <div className='sidebar__stat'>
                    <p>who viewed you</p>
                    <h5 className='sidebar__statNumber'>2,543</h5>
                </div>
            </div>
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem("Java")}
                {recentItem("Javascript")}
                {recentItem("React")}
                {recentItem("softwareengineering")}
                {recentItem("Design")}
            </div>
        </div>
    );
};

export default Sidebar;