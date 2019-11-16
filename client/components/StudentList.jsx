import React from 'react';
import StudentEntry from './StudentEntry.jsx';
import styled from 'styled-components';
import SearchBar from './SearchBar.jsx';
import TagSearchBar from './TagSearchBar.jsx';

const StudentListStyle = styled.div`
  width: 100%;
`
const SearchBarStyle = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10px;
  margin: 10px;
`

class StudentList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { listOfStudents, searchQuery, addTags} = this.props
    return (
      <StudentListStyle>
        <SearchBarStyle><SearchBar searchQuery={searchQuery} /></SearchBarStyle>
        <SearchBarStyle><TagSearchBar searchQuery={searchQuery}/></SearchBarStyle>
        {listOfStudents.map((student) => <StudentEntry addTags={addTags} key={`${student.id}a`} student={student}/>)}
      </StudentListStyle>
    )
  }
}
export default StudentList;