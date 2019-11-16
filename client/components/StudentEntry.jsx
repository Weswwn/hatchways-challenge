import React from 'react';
import styled from 'styled-components';
import Grades from './Grades.jsx';

const StudentBody = styled.div`
  position: relative;
  width: 80%;
  padding: 20px;
  margin: 20px;
`

const ProfilePictureStyle = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  align-items: center;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  width: 8rem;
  height: 8rem;
  position: relative;
  flex: none;
  border-radius: 50%;
  border: 1px solid black;
`

const StudentData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  /* margin: 10px 10px 10px 20px;
  padding: 10px 10px 10px 20px; */
`
const StudentName = styled.div`
  font-size: 2rem;
  font-weight: bold;
`
const GradeStyle = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonStyle = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  float: right;
  padding-top: 25px;
`

class StudentEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      buttonDisplay: '+'
    }
    this.calculateGradeAverage = this.calculateGradeAverage.bind(this);
    this.expandStudent = this.expandStudent.bind(this);
  }
  calculateGradeAverage(grades) {
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
      average = average + parseInt(grades[i]);
    }
    average = average / (grades.length);
    return average;

  }

  expandStudent() {
    if (this.state.buttonDisplay === '-') {
      this.setState({
        buttonDisplay: '+'
      })
    } else {
      this.setState({
        buttonDisplay: '-'
      })
    }
    this.setState(prevState => (
      {
      expanded: !prevState.expanded
    }))
  }
  render() {
    let { pic, firstName, lastName, email, company, skill, grades } = this.props.student;
    return (
      <StudentBody>
        <ProfilePictureStyle>
          <img style={{height: '100px', width: '100px'}} src={pic} />
        </ProfilePictureStyle>

        <StudentData>
          <StudentName>
            {`${firstName} ${lastName}`}
          </StudentName>
          <div>
            Email: {email}
          </div>
          <div>
            Company: {company}
          </div>
          <div>
            Skill: {skill}
          </div>
          <div>
            Average: {`${this.calculateGradeAverage(grades)}%`}
          </div>
        </StudentData>
        <ButtonStyle>
          <button id="expand-btn" onClick={this.expandStudent}>{this.state.buttonDisplay}</button>
        </ButtonStyle>
        {this.state.expanded === true ? <GradeStyle>
          {grades.map((grade, i) => <Grades key={i} index={i} grade={grade} />)}
        </GradeStyle> : null }
      </StudentBody>
    )
  }
}
export default StudentEntry;