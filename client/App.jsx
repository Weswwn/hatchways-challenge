import React from 'react';
import axios from 'axios';
import StudentList from './components/StudentList.jsx';
import styled from 'styled-components';

const MainStudentComponent = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  overflow: scroll;
  background-color: white;
  justify-content: center;
  margin: 50px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
`
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfStudents: [],
      filteredListOfStudents: [],
      query: ''
    }
    this.searchQuery = this.searchQuery.bind(this);
    this.filterArray = this.filterArray.bind(this);
    this.addTags = this.addTags.bind(this);
  }

  componentDidMount() {
    axios.get('/students')
      .then((response) => {
        let { students } = response.data
        students.forEach(student => student.tags = {});
        this.setState({
          listOfStudents: students,
          masterCopyOfStudents: students
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  filterArray() {
    let searchString = this.state.query;
    let responseData = this.state.masterCopyOfStudents;

    if (searchString.length > 0) {
      searchString = searchString.toLowerCase();
      responseData = responseData.filter(student => student.firstName.toLowerCase().includes(searchString) || student.lastName.toLowerCase().includes(searchString))
      this.setState({
        listOfStudents: responseData
      })
    }
    if (searchString.length === 0) {
      this.setState({
        listOfStudents: this.state.masterCopyOfStudents
      })
    }
  }

  addTags(tagToAdd, studentID) {
    let { listOfStudents, masterCopyOfStudents } = this.state;
    let tempListOfStudents = listOfStudents;
    let tempMasterCopyOfStudents = masterCopyOfStudents;

    console.log(tagToAdd, studentID);
    tempListOfStudents.forEach(student => {
      if (student.id === studentID) {
        student.tags[tagToAdd] = tagToAdd;
      }
      this.setState({
        listOfStudents: tempListOfStudents
      })
      tempMasterCopyOfStudents.forEach(student => {
        if (student.id === studentID) {
          student.tags[tagToAdd] = tagToAdd;
        }
        this.setState({
          masterCopyOfStudents: tempMasterCopyOfStudents
        })
      })
    })
  }

  searchQuery(e) {
    this.setState({
      query: e.target.value
    }, () => {
      this.filterArray();
    })
  }

  render() {
    return (
      <MainStudentComponent>
        <StudentList addTags={this.addTags} searchQuery={this.searchQuery} listOfStudents={this.state.listOfStudents} />
      </MainStudentComponent>
    )
  }
}
export default App;