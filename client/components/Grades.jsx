import React from 'react';

class Grades extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { i, grade } = this.props;
    return (
      <div>
        Test{i} {grade}%
      </div>
    )
  }
}
export default Grades;