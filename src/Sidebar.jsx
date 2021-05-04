import React from 'react';
import './Sidebar.css';
import {Avatar} from "@material-ui/core";

const Sidebar = () => {

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
                <Avatar className='sidebar__avatar'/>
                <h2>Partho Das</h2>
                <h4>partho.swe@gmail.com</h4>
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