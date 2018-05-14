import React from 'react';
import {Badge} from 'react-bootstrap';

function PomodorosListItemActivityTags({activity_tag}){
  return(
    <Badge>
      { activity_tag.name }
    </Badge>
  )
}

export default PomodorosListItemActivityTags;
