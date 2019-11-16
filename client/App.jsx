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
      query: '',
      tagSearchQuery: ''
    }
    this.searchQuery = this.searchQuery.bind(this);
    this.filterArray = this.filterArray.bind(this);
    this.addTags = this.addTags.bind(this);
    this.filterTagsArray = this.filterTagsArray.bind(this);
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

  addTags(tagToAdd, studentID) {
    let { listOfStudents, masterCopyOfStudents } = this.state;
    let tempListOfStudents = listOfStudents;
    let tempMasterCopyOfStudents = masterCopyOfStudents;

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

  filterArray() {
    let searchString = this.state.query.toLowerCase();
    let responseData = this.state.masterCopyOfStudents;

    if (searchString.length > 0) {
      responseData = responseData.filter(student => student.firstName.toLowerCase().includes(searchString) || student.lastName.toLowerCase().includes(searchString))
      this.setState({
        listOfStudents: responseData
      })
    }
  }

  filterTagsArray() {
    let searchTagString = this.state.tagSearchQuery.toLowerCase();
    let responseData = this.state.masterCopyOfStudents;
    if (searchTagString.length > 0) {
      responseData = responseData.filter(student => {
        let string = Object.keys(student.tags).join();
        if (string.toLowerCase().includes(searchTagString)) {
          return true;
        }
      })
    }
    if (this.state.query.length > 0) {
      console.log('hi');
      let temp = [...this.state.listOfStudents];
      temp = temp.concat(responseData);
      console.log('temp', temp);
      console.log('response', responseData);

      var hash = Object.create(null), result = [];

      for (let i = 0; i < temp.length; i++) {
          if (!hash[temp[i].id]) {
              hash[temp[i].id] = true;
              result.push(temp[i]);
          }
      }
      console.log('new temp', result);
      this.setState({
        listOfStudents: result
      })
    } else {
      this.setState({
        listOfStudents: responseData
      })
    }
  }

  searchQuery(e) {
    if (e.target.id === 'tag-input') {
      this.setState({
        tagSearchQuery: e.target.value
      }, () => {
        this.filterTagsArray();
      })
    } else {
      this.setState({
        query: e.target.value
      }, () => {
        this.filterArray();
      })
    }
  }

  render() {
    return (
      <MainStudentComponent>
        <StudentList searchQuery={this.searchQuery} addTags={this.addTags} searchQuery={this.searchQuery} listOfStudents={this.state.listOfStudents} />
      </MainStudentComponent>
    )
  }
}
export default App;