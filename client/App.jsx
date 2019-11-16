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
      listOfStudents: []
    }
  }

  componentDidMount() {
    axios.get('/students')
      .then((response) => {
        console.log(response);
        let { students } = response.data
        this.setState({
          listOfStudents: students
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <MainStudentComponent>
        <StudentList listOfStudents={this.state.listOfStudents} />
      </MainStudentComponent>
    )
  }
}
export default App;