import React, { ChangeEvent, Component } from 'react';
import { StyledSearchBar } from './styles/SearchBar.styles';

type SearchBarProps = {
  getFilterValue: (value: string) => void;
}

type SearchBarState = {
  searchValue: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  onChange = (value: string) => {
    this.setState({ searchValue: value });
    this.props.getFilterValue(value);
  }

  render() {
    return (
      <StyledSearchBar
        type="text"
        value={this.state.searchValue}
        placeholder="Search products..."
        onChange={(e:ChangeEvent<HTMLInputElement>) => this.onChange(e.target.value)}
      />
    );
  }
}

export default SearchBar;
