import React, {Component} from 'react';
import './Header.css';
import logo from '../images.png';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            city: e.target.value
        });
    }
    handleSubmit =(e) => {
        this.props.makeApiCall(this.state.city);
    }
    
    render(){
        return (
            <div className="col-12 py-4 header">
                <h1 className="col-12 header-title">
                    <img className="logo" src={logo} alt="logo" />
                    Weather App
                </h1>
                <div className="py-2 search-wrapper">
                    <input type="text" className="search form-control" id="location" aria-describedby="" placeholder="Enter Location" onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit} className="fa fa-search" />
                </div>
            </div>
        );
    }
}

export default Header;