import React from 'react';

const SocialMediaPanel = ({ socialData }) => {
  return (
    <div>
      <h2>Social Media Metrics</h2>
      <ul>
        {socialData.map((platform, index) => (
          <li key={index}>
            <strong>{platform.name}</strong> - {platform.followers} Followers, {platform.posts} Posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaPanel;
