import { Avatar, Button } from '@material-ui/core';
import { MoreHoriz, PlaylistAdd, Reply, ThumbDown, ThumbUp } from '@material-ui/icons';
import React from 'react'
import SidebarRow from './../SidebarRow/SidebarRow';
import './VideoInfo.css'

const VideoInfo = ({title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs}) => {
    return (
        <div className='videoinfo'>
            <div className='videoinfo__headline'>
                <h1>{title}</h1>
            </div>
            <div className='videoinfo__stats'>
                <p>{viewCount} views • {publishedDate}</p>
                <div className='videoinfo__likes'>
                    <SidebarRow Icon={ThumbUp} title={likeCount} />
                    <SidebarRow Icon={ThumbDown} title={dislikeCount} />
                    <SidebarRow Icon={Reply} title='SHARE' />
                    <SidebarRow Icon={PlaylistAdd} title='SAVE' />
                    <SidebarRow Icon={MoreHoriz} title='' />
                </div>
            </div>
            <hr />
            <div className='videoinfo__channel'>
                <div>
                    <Avatar 
                        className='videoinfo__avatar'
                        alt={channelTitle}
                        src={channelImage}
                    />
                    <div className='videoinfo__channelinfo'>
                        <h3 className='videoinfo__channeltitle'>{channelTitle}</h3>
                        <p className='videoinfo__channelsubs'>{subs} subscribers</p>
                    </div>
                </div>
                <div className='videoinfo__subscribe'>
                    <Button color='secondary' >SUBSCRIBE</Button>
                </div>
            </div>
            <div className='videoinfo__channeldesc'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoInfo
