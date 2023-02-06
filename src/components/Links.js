import React from 'react';

function Links(mediaLinks){
    return (
        <div>
        <h3>Links </h3>
        <a href={mediaLinks.github}>{mediaLinks.github}</a>
        <a href={mediaLinks.linkedin}>{mediaLinks.linkedin}</a>
        </div>
    );
}

export default Links;
