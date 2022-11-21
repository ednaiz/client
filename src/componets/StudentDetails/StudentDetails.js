import React, { useState } from 'react'



const Users = ({ users }) => {
    const [pgNo, setPGNO] = useState(0)
    const [isFetching, setIsFetching] = useState(false)





    return isFetching
        ? (
            <div class="loader" style={{ marginLeft: "50%" }}>
                <img src="/assets/index.svg" />
            </div>
        )
        : (
            <div className="col-sm-10">

                <table
                    className="table"
                    style={{
                        marginLeft: "20%",
                        marginRight: "5%"
                    }}
                // filterable={["id", "FName", "LName", "Email", "Phone"]}
                // noDataText="No matching records found"
                // itemsPerPage={7}
                // currentPage={pgNo}
                // sortable={true}
                // data={users}
                >
                    <thead>
                        <tr>
                            <th column="name">Name</th>
                            <th column="username">Username</th>
                            <th column="email">Email address</th>
                            <th column="website">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(x => <tr key={x.id}>
                            <td>{x.FName} </td>
                            <td>{x.LName} </td>
                            <td>{x.Phone} </td>
                            <td>{x.Email} </td>
                        </tr>)}
                    </tbody>
                </table>
                <NavLink to = " /studentlist "> Back</NavLink>
                <span>  </span>
                <NavLink to ={"/studentlist"/edit/" + this.state.student ? id}>Edit<NavLink}

                </>
        
            }  

            </div>
        );
        

            }

       


export default Users