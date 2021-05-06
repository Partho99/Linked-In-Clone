import React from 'react';
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widget__articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widget__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("React is back", "Top news - 9000 viewers")}
            {newsArticle("Spring Boot jhipster", "Top news - 19000 viewers")}
            {newsArticle("Tesla hits new highs", "Car & auto - 5000 viewers")}
            {newsArticle("Bitcoin Breaks $50K", "Crypto - 7000 viewers")}
            {newsArticle("Spring boot Security patch", "Top news - 3000 viewers")}
            {newsArticle("Is Redux difficult", "Top news - 3000 viewers")}
            {newsArticle("Context API vs Redux", "Top news - 3000 viewers")}
        </div>
    );
};

export default Widgets;