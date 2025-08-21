import React from 'react'

const VideoCard = ({ info }) => {

    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className="shadow-lg w-48 m-2 p-2">
            <div className="w-48">
                <img alt=" thumbnails" src={thumbnails.high.url} className=" w-full h-full object-cover rounded-lg"/>
            </div>
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                {/* <li>{thumbnails}</li> */}
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard;
