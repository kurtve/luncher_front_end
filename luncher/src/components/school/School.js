import React from 'react';
import { Link } from 'react-router-dom';

import { SchoolBox, H2, SchoolBoxItem} from '../../styles/index';
import './School';

const School = props => {
  return (
    <Link to={`/school/${props.school.id}`} style={{ textDecoration: 'none' }}>
      <SchoolBox>
        <SchoolBoxItem>
          <H2>{props.school.schoolName}</H2>
        </SchoolBoxItem>
        <SchoolBoxItem>
          <H2>{props.school.schoolAddress}</H2>
        </SchoolBoxItem>
        <SchoolBoxItem>
          <H2>
            {(props.school.fundsRequested).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </H2>
        </SchoolBoxItem>
      </SchoolBox>
    </Link>
  );
}

export default School;