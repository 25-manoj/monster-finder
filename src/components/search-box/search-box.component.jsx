import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <input
        type="search"
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={onChangeHandler}
      ></input>
    );
  }
}

export default SearchBox;
