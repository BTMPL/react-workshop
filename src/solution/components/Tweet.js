import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";


export const UserDetails = ({userName, userAvatar}) => (
  <div className="UserDetails">
    <img src={userAvatar} width="50" />
    <b>{userName}</b>  
  </div>
)

UserDetails.propTypes = {
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
}

UserDetails.defaultProps = {
  userName: 'Anonim'
}

export const Tweet = ({tweet}) => (
  <div>
    <UserDetails userName={tweet.user.userName} userAvatar={tweet.user.userAvatar} />
    <time>{tweet.date}</time>
    <p>
      {tweet.text}
    </p>
  </div>
)

Tweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.shape({
      userName: PropTypes.string,
      userAvatar: PropTypes.string,
    }),
    date: PropTypes.string,
    text: PropTypes.string,
  })
}