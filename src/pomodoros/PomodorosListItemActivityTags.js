import React from 'react';
import {Badge} from 'react-bootstrap';
import styled from 'styled-components';

const KhassarBadge = styled(Badge)`
  margin-right: 0.3em;
`;

function PomodorosListItemActivityTags({activity_tag}){
  return(
    <KhassarBadge>
      {activity_tag.name}
    </KhassarBadge>
  )
}

export default PomodorosListItemActivityTags;
