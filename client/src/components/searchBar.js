import React, { Component } from 'react';
import axios from 'axios';
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
      stateCode: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'],
      chosenSC: "",
      keyword: "",
      parks: [],
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

  handleClick = (event) => {
    console.log(event);

  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = (event) => {
    const { keyword, chosenSC } = this.state;
    console.log("clicked");
    console.log(keyword, chosenSC)
    axios.get("/search", {
      params: {
        keyword,
        chosenSC
      }
    }).then((res) => {
      this.setState({ parks: res.data.data });
      console.log(res.data.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { stateCode } = this.state;
    return (
      <div>
        <InputGroup>
          <Input
            value={this.state.keyword}
            name="keyword"
            onChange={this.handleInputChange}
            placeholder="Keyword (required)"
          />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              {this.state.chosenSC ? this.state.chosenSC : "State"}
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
              {stateCode.map((element, index) => (
                < DropdownItem key={index} name="chosenSC" value={element} onClick={this.handleInputChange} >  {element} </DropdownItem>
              ))}
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Button className="ml-3" onClick={this.handleSearch}>Search</Button>

        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;