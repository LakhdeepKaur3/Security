import React, { Component } from 'react';
export default class AdminList  extends Component{
    constructor(){
        super();
        this.state = {
            currentUserName : '',
            deleteClicked:false
        }
    }

    showTableRow = (adminList) => {
        if (adminList && adminList.length) {
            const arrayTr = adminList.map((admin,index)=>{
                return (
                    <tr key={index}  className="tablehover">
                        <th scope="row">{index+1}</th>
                        <td>{admin.userName}</td>
                        <td>{admin.name}</td>
                        <td>{admin.email}</td>
                        <td>{admin.mobileNo}</td>
                        <td>{admin.fullAddress}</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary"><b>Edit</b>
                            </button>
                        </td>
                        <td>
                        {/* onClick={()=>{deleteAdmin(admin.userName)}} */}
                            <button type="button" className="btn btn-outline-danger" onClick={()=>{
                                this.setState({currentUserName:admin.userName
                                }) }}
                            data-toggle="modal" data-target="#exampleModal"><b>Delete</b></button>
                        </td>
                    </tr>
                );
            });
            return arrayTr;
        }
        else {
          return(  <tr>
                <td colSpan="8">
                No Admin Records Found.
                </td>
            </tr>)
        }
    }

    showAdminList = (adminList) => {
    
        console.log()
        return (
            <div className="tablelist">
            <div className="table-div">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit </th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showTableRow(adminList)}
                   
                </tbody>
            </table>
            </div>
    <button type="button"   style={{ borderBottom: "none",margin:'10px 5px',
    'margin': 'auto',
    display: 'block' } }  className="btn btn-success">ADD</button>
            </div>
        );
    }

    render() {
    
        return (
            <div id="admin-list-wrapper">
            {this.showAdminList(this.props.adminList)}
            <h2 style={{display:(this.props.message && this.state.deleteClicked)?"block":'none',
                color:this.props.error?"red":"green",
                textAlign:'center'
            }}>
                {this.props.message}
            </h2>
            
    
    
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Do you want to Delete Admin!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
        User Name : {this.state.currentUserName}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" data-dismiss="modal" onClick={()=>{
                 setTimeout(()=>{
                    this.setState({
                        deleteClicked:false
                    });
                },2500);
                this.setState({
                    deleteClicked:true
                })
                
                this.props.deleteAdmin(this.state.currentUserName)}}  className="btn btn-primary" >Confirm Delete</button>
          </div>
        </div>
      </div>
    </div>
            </div>
        )
    }

}