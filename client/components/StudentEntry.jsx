import React from 'react';
import styled from 'styled-components';

const StudentBody = styled.div`
  width: 100%;
  height: 150;
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
  margin: 10px;
`

class StudentEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.calculateGradeAverage = this.calculateGradeAverage.bind(this);
  }
  calculateGradeAverage(grades) {
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
      console.log(grades[i]);
      average = average + parseInt(grades[i]);
    }
    average = average / (grades.length);
    return average;

  }
  render() {
    let { pic, firstName, lastName, email, company, skill, grades } = this.props.student;
    
    return (
      <StudentBody>
        <ProfilePictureStyle>
          <img style={{height: '100px', width: '100px'}} src={pic} />
        </ProfilePictureStyle>
        <StudentData>
          <div>
            {`${firstName} ${lastName}`}
          </div>
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
            Grades: {`${this.calculateGradeAverage(grades)}%`}
          </div>
        </StudentData>
      </StudentBody>
    )
  }
}
export default StudentEntry;