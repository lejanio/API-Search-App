import React, { Component } from 'react';

type ClassComponentProps = {
  getFilterValue: (value: string) => void;
}

type ClassComponentState = {
  searchValue: string;
}

class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  constructor(props: ClassComponentProps) {
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
      <input
        type="text"
        value={this.state.searchValue}
        placeholder="Search products"
        onChange={(e) => this.onChange(e.target.value)}
      />
    );
  }
}

export default ClassComponent;
