import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__av atar">
                <Avatar src="https://avatarfiles.alphacoders.com/146/146420.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Apoorva
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @apoorva
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Code. Save. Eat. Sleep. Travel. Repeat.</p>
                    </div>
                </div>
                <img src="" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post;
