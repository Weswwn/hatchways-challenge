import React from 'react';
import StudentEntry from './StudentEntry';

class StudentList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { listOfStudents } = this.props
    return (
      listOfStudents.map(student => <StudentEntry student={student}/>)
    )
  }
}
export default StudentList;