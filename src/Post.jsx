import React, {forwardRef} from 'react';
import {Avatar} from "@material-ui/core";
import './Post.css';
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post__header'>
                <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post__body'>
                <p>{message}</p>
            </div>
            <div className='post__buttons'>
                <InputOption
                    Icon={ThumbUpAltOutlinedIcon}
                    title='Like'
                    /*color='blue'*/
                />
                <InputOption
                    Icon={ChatOutlinedIcon}
                    title='Comment'
                />
                <InputOption
                    Icon={ShareOutlinedIcon}
                    title='Share'/>
                <InputOption
                    Icon={SendOutlinedIcon}
                    title='Send'
                />
            </div>
        </div>
    );
});

export default Post;