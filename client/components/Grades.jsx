import React from 'react';
import styled from 'styled-components';

class Grades extends React.Component {
  constructor(props) {
    super(props)
  } 
  render() {
    let { index, grade } = this.props;
    return (
      <div>
        Test {index + 1}: {grade}%
      </div>
    )
  }
}
export default Grades;