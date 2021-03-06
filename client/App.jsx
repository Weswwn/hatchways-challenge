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
      userNameSearch: [],
      tagSearch: [],
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
          masterCopyOfStudents: students,
          userNameSearch: students,
          tagSearch: students
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
      if (this.state.tagSearchQuery.length > 0 && this.state.tagSearch.length !== 0) {
        let temp = [...this.state.tagSearch];
        temp = temp.concat(responseData);

        let hash = Object.create(null), result = [];

        for (let i = 0; i < temp.length; i++) {
            if (!hash[temp[i].id]) {
                hash[temp[i].id] = true;
                result.push(temp[i]);
            }
        }
        this.setState({
          listOfStudents: result
        })
        } else {
          this.setState({
            listOfStudents: responseData,
            userNameSearch: responseData
          })
        }
      }
    if (searchString.length === 0) {
      this.setState({
        listOfStudents: this.state.tagSearch,
        userNameSearch: this.state.masterCopyOfStudents
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
    if (this.state.query.length > 0 && this.state.userNameSearch.length !== 0) {
      let temp = [...this.state.userNameSearch];
      temp = temp.concat(responseData);

      let hash = Object.create(null), result = [];

      for (let i = 0; i < temp.length; i++) {
          if (!hash[temp[i].id]) {
              hash[temp[i].id] = true;
              result.push(temp[i]);
          }
      }
      this.setState({
        listOfStudents: result
      })
    } else {
      this.setState({
        listOfStudents: responseData,
        tagSearch: responseData
      })
    }
    if (searchTagString.length === 0) {
      this.setState({
        listOfStudents: this.state.userNameSearch,
        tagSearch: this.state.masterCopyOfStudents
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