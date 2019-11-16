import React from 'react';
import StudentEntry from './StudentEntry.jsx';
import styled from 'styled-components';

const StudentListStyle = styled.div`
  width: 100%;
`

class StudentList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { listOfStudents } = this.props
    return (
      <StudentListStyle>
        {listOfStudents.map((student) => <StudentEntry key={student.id} student={student}/>)}
      </StudentListStyle>
    )
  }
}
export default StudentList;