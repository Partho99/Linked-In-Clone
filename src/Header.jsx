import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatLevelIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import {useDispatch} from "react-redux";
import {logout} from "./features/userSlice";
import {auth} from "./firebase";

const Header = () => {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt=''/>

                <div className='header__search'>
                    <SearchIcon/>
                    <input placeholder='Search' type='text'/>
                </div>
            </div>
            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatLevelIcon} title="Messaging"/>
                <HeaderOption
                    avatar='https://lh3.googleusercontent.com/ogw/ADGmqu-AyN8g4PAEnI7RyRtB_6rR1FXx3O_xruIPznP3OQ=s83-c-mo'
                    alt='img'
                    title=''
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    );
};

export default Header;