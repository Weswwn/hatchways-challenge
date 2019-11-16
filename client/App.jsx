import React from 'react';
import axios from 'axios';
import StudentList from './components/StudentList.jsx';

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
      <div>
        <StudentList listOfStudents={this.state.listOfStudents} />
      </div>
    )
  }
}
export default App;