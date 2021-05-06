import React from 'react';
import './HeaderOption.css'
import {Avatar} from "@material-ui/core";

const HeaderOption = ({avatar, Icon, title, onClick}) => {
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon'/>}
            <h3 className='headerOption__title'>{title}</h3>
            {avatar && <Avatar className='headerOption__avatar' src={avatar}/>}
        </div>
    );
};

export default HeaderOption;