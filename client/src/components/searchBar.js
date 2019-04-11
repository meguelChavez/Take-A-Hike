import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  render() {
    const { stateCode } = this.state;
    return (
      <div>
        <InputGroup>
          <Input
            value={this.props.keyword}
            name="keyword"
            onChange={this.props.handleInputChange}
            placeholder="Keyword (required)"
          />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle className="btn-success" caret>
              {this.props.chosenSC ? this.props.chosenSC : "State"}
            </DropdownToggle>
            <DropdownMenu
              modifiers={{
                setMaxHeight: {
                  enabled: true,
                  order: 890,
                  fn: (data) => {
                    return {
                      ...data,
                      styles: {
                        ...data.styles,
                        overflow: 'auto',
                        maxHeight: 100,
                      },
                    };
                  },
                },
              }}
            >
              {this.props.stateCode.map((element, index) => (
                < DropdownItem key={index} name="chosenSC" value={element} onClick={this.props.handleInputChange} >  {element} </DropdownItem>
              ))}
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Button className="ml-3 btn-success" onClick={this.props.handleSearch}>Search</Button>

        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;