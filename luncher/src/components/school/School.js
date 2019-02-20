import React from 'react';
import { Link } from 'react-router-dom';

import { SchoolBox, H2 } from '../../styles/index';
import './School';

const School = props => {
  return (
    <Link to={`/school/${props.school.id}`} style={{ textDecoration: 'none' }}>
      <SchoolBox>
        <H2>{props.school.schoolName}</H2>
      </SchoolBox>
    </Link>
  );
}

export default School;