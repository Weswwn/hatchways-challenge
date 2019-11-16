import React from 'react';

class TagSearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange(e) {
    let { searchTagQuery } = this.props;
    searchTagQuery(e.target.id)
  }

  render () {
    return (
      <div>
        <form>
          <input onChange={this.onChange} type="text"></input>
          <input type="submit" hidden={true} placeholder="Search Tag Here"></input>
        </form>
      </div>
    )
  }
}
export default TagSearchBar;