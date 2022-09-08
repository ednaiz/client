import "./StudenDetails.css"
import React, {Component} from 'react'
import Reactable from 'reactable'

var Table = Reactable.Table;
var Thead = Reactable.Thead;
var Th = Reactable.Th;

export class Users extends Component {
    state = {
        pgNo: 0,
        users: [],
        isFetching:true
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(res => {
                this.setState({users: res,isFetching:false});
            });
    }

    render() {
        return this.state.isFetching
            ? (
                <div class="loader" style={{marginLeft: "50%" }}>
                    <img src="/assets/index.svg"/>
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
}