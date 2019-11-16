import React from 'react';
import styled from 'styled-components';

const TagStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  width: 60px;
  background-color: #dedad1;
  margin: 10px;
  border-radius: 11px;
`

class Tags extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { tag } = this.props;
    return (
      <TagStyle>
        {tag}
      </TagStyle>
    )
  }
}
export default Tags;