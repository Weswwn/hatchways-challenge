import React from 'react';

class Tags extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { tag } = this.props;
    return (
      <div>
        {tag}
      </div>
    )
  }
}
export default Tags;