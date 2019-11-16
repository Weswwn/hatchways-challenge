import React from 'react';

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
      <div>
        <img src={pic} />
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
      </div>
    )
  }
}
export default StudentEntry;