import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';

class Student extends Component{
    state = {
        name: '',
        email: '',
        phonenumber: '',
        address: '',
        error_list:[],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    saveDetails = async (e) => {
        e.preventDefault();

        const res= await axios.post('http://localhost:8080/api/userdetails', this.state); //until and unless response should not execute next line
        if(res.data.status ===200){
            console.log(res.data.message);

            this.props.history.push('/');
            this.setState({
                name: '',
                email: '',
                phonenumber: '',
                address: '',
            });
        }else{
            this.setState({
                error_list: res.data.validate_err, 
            });
            
        }
    }

    render() {
        return (
             <div className="cotainer">
                  <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>
                                        Login Information
                                        <Link to={"submit"} className="btn btn-primary btn-sm float-end">Submit</Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.saveDetails}>

                                     <div className="form-group-mb-3">
                                        <label>User Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                        <span class="text-danger">{this.state.error_list.name}</span>
                                     </div>
                                     <div className="form-group-mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                        <span class="text-danger">{this.state.error_list.email}</span>
                                     </div>
                                     <div className="form-group-mb-3">
                                        <label>Phone Number</label>
                                        <input type="text" name="phonenumber" onChange={this.handleInput} value={this.state.phonenumber} className="form-control" />
                                        <span class="text-danger">{this.state.error_list.phonenumber}</span>
                                     </div>
                                     <div className="form-group-mb-3">
                                        <label>Address</label>
                                        <input type="text" name="address" onChange={this.handleInput} value={this.state.address} className="form-control" />
                                        <span class="text-danger">{this.state.error_list.address}</span>
                                     </div>
                                     <div className="form-group-mb-3">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                     </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                   </div>
              </div>
         );
    }
}

export default Student;