import React from 'react';

class TagSearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e) {
    e.preventDefault();
    let { searchQuery } = this.props;
    searchQuery(e);
  }

  render () {
    return (
      <div>
        <form>
          <input id="tag-input" onChange={this.onChange} type="text"></input>
          {/* <input type="submit" hidden={true} placeholder="Search Tag Here"></input> */}
        </form>
      </div>
    )
  }
}
export default TagSearchBar;