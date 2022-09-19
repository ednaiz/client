import React, { Component } from 'react'
import { Table, Th, Thead } from 'reactable'
import './Lecturer.css'



export class Lecturer extends Component {
    state = {
        pgNo: 0,
        users: [],
        isFetching: true
    };
}

        const handleSubmit = (e) => {
        e.preventDefault();
        const lecturer = profileObj( id, name, username, email, website, address);
        localStorage.setItem('lecturerProfile', JSON.stringify(lecturer))
        let form_data = new FormData()//fk
       form_data.append('id', parseInt(JSON.parse(localStorage.getItem('data')).id, 10))
       form_data.append('name',lecturer.namelecturer)
       form_data.append('username',lecturer.username)
       form_data.append('email',lecturer.email)
       form_data.append('website',lecturer.website)


    componentDidMount() 
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(res => {
                this.setState({ users: res, isFetching: false });
            });
    

    render() 
        return this.state.isFetching
            ? (
                <div class="loader" style={{ marginLeft: "50%" }}>
                    <img src="/assets/index.svg" />
                </div>
            )
            : (
                <div className="col-sm-10">

                    <Table
                        className="table"
                        style={{
                            marginLeft: "20%",
                            marginRight: "5%"
                        }}
                        filterable={["id", "name", "username", "email", "website"]}
                        noDataText="No matching records found"
                        itemsPerPage={7}
                        currentPage={this.state.pgNo}
                        sortable={true}
                        data={this.state.users}>
                        <Thead>
                            <Th column="id">ID</Th>
                            <Th column="name">Name</Th>
                            <Th column="username">Username</Th>
                            <Th column="email">Email address</Th>
                            <Th column="website">Website</Th>
                        </Thead>
                    </Table>
                </div>
            );
    }
