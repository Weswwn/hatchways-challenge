import React from 'react';
import StudentEntry from './StudentEntry.jsx';

class StudentList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { listOfStudents } = this.props
    return (
      <div>
        {listOfStudents.map((student) => <StudentEntry key={student.id} student={student}/>)}
      </div>
    )
  }
}
export default StudentList;