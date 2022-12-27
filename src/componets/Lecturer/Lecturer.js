import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Th, Thead } from 'reactable'
import './Lecturer.css'



const Lecturer = () => {
    const [pgNo, setPGNO] = useState(0)
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(true)


   

    useEffect(() => {
        axios.get("https://localhost:44340/api/users")
            .then(res => {
                setUsers(res.data);
                setIsFetching(false)
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
                    filterable={["id", "name", "username", "email", ]}
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
                        
                    </Thead>
                </Table>
            </div>
        );
}


export default Lecturer;
