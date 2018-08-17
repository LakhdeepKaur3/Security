import React, { Component } from 'react';
import  {connect} from 'react-redux';
import * as actions from '../store/actions';
import AdminListComp from '../components/AdminList';


export class AdminList extends Component{
    componentDidMount(){
        this.props.fetchAdminList();
    }


    render(){
        console.log("list", this.props.adminList);
        return (
            <div>
                <AdminListComp error={this.props.error} message = {this.props.message} deleteAdmin={this.props.deleteAdmin} adminList={this.props.adminList}/>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    console.log("state",state)
    return {
        adminList:state.admin.adminList,
        error:state.admin.error,
        message:state.admin.message

    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchAdminList:()=>dispatch(actions.fetchAdminList()),
        deleteAdmin:(userName)=>dispatch(actions.deleteAdmin(userName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminList);
