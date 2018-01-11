import "./OpenProjectList.css"
import React, { Component } from 'react';
import axios from 'axios';
import OpenProjectItem from './OpenProjectItem';
import OpenProjectSearch from './OpenProjectSearch';


class OpenProjectList extends Component {

    state = {
        openProjects: [],
        keyword: '',
        startDate: '',
        endDate: ''
    }

    //load all open projects after mounting 
    componentDidMount() {
        this.fetchOpenProjects();
    }

    fetchOpenProjects = () => {
        axios.get('/api/projects')
            .then((response) => {
                this.setState({
                    openProjects: response.data.filter(openProject => !openProject.user[0]),
                    allOpenProjects: response.data.filter(openProject => !openProject.user[0])
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSearchSubmit = (event) => {
        event.preventDefault();

        var body = {
            requirementsKeyword: this.state.keyword,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };

        axios.post('/api/search', body)
            .then((response) => {
                this.setState({
                    openProjects: response.data.filter(openProject => !openProject.user[0])

                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
   
    render() {
        return (
            <div>

                <OpenProjectSearch
                    onChange={this.handleInputChange}
                    keyword={this.state.keyword}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
                <button type="submit" className="btn btn-default" onClick={this.handleSearchSubmit}>Search</button>
                <button type="submit" className="btn btn-default" onClick={() => {
                    this.setState({
                        keyword: '',
                        startDate: '',
                        endDate: ''
                    });
                    this.setState({ openProjects: this.state.allOpenProjects });
                }}>Clear Filter</button>

                {/* <div className="center-align">
                    <h2>Projects</h2>
                </div> */}
                <div className="col sm12">
                    <div id="open-project-title" className="valign-wrapper">
                        <h4>OPEN PROJECTS</h4>
                    </div>
                    
                    <div>
                        {this.state.openProjects.map((project) => {
                            return (
                                <OpenProjectItem key={project._id} {...project} />
                            );
                        })}
                    </div>
                </div>

            </div>
        );
    }
};

export default OpenProjectList;