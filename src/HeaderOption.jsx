import React from 'react';
import './HeaderOption.css'
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

const HeaderOption = ({avatar, Icon, title, onClick}) => {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon'/>}
            <h3 className='headerOption__title'>{title}</h3>
            {avatar && <Avatar className='headerOption__avatar' src={user?.photoUrl}>
                {user?.email[0].toUpperCase()}
            </Avatar>}
        </div>
    );
};

export default HeaderOption;