import React, { useState } from 'react'
import { useEffect } from 'react';
import { Table, Thead, Th } from 'reactable'



const Users = () => {
    const [pgNo, setPGNO] = useState(0)
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(true)



    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(response => response.json())
            .then(res => {
                setIsFetching(false)
                setUsers(res)
                // this.setState({ users: res, isFetching: false });
            });
    }, [])

    return isFetching
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
                    currentPage={pgNo}
                    sortable={true}
                    data={users}>
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

export default Users