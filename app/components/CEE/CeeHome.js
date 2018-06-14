import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import { baseUrl, signupUrl, validateUrl, loginUrl, allDyCeeUrl, allInspectorUrl , allStoreOfficerUrl, allVendorUrl, addDyCEEUrl, getInfoUrl, updateInfoUrl } from './../../config/url';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';
import {
  AppBar,
  RaisedButton,
  TextField, IconButton, SvgIcon,
} from 'material-ui';

const GitHubIcon = (props) => (
    <SvgIcon {...props}>
        {<path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>}
    </SvgIcon>
);

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '0 32px 16px 0',
    position : 'absolute',
    zIndex: '1'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  tablediv : {
    margin: '5px 5px 5px 5px',
  },
};

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize : 14
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class CeeHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      getall : [],
      length : 0,
      flag : 0,
      open : false,
      name :'',
      email : '',
      mobile : '',
      location : '',
      role : "DyCEE",
      _id : this.props.location.state._id
    }
    this._toggle = this._toggle.bind(this);
    //this.getall = this.getall.bind(this);
  //  this.rowsHandler = this.rowsHandler.bind(this);
  };

_toggle(e) {
  var status = this.state.open;
  if(status == false) {
    status = true
  }
  else {
    status = false
  }
  this.setState({open : status});
  console.log(status);
 }

  render() {
    return (

      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="CEE Home" iconElementLeft={
              <IconButton
                onClick={ this._toggle } >
                <GitHubIcon />
                </IconButton>
            } />

            { this.state.open == true ?
              <Paper style={style.paper}>
                <Menu ref="Menu" disableAutoFocus={true}>
                  <MenuItem primaryText="All DyCEE" leftIcon={<RemoveRedEye />}  onClick={(event) => {this.getall(event,"DyCEE") }}/>
                  <MenuItem primaryText="All Store Officers" leftIcon={<RemoveRedEye />} onClick={(event) => {this.getall(event,"StoreOfficer")} } />
                  <MenuItem primaryText="All Inspectors" leftIcon={<RemoveRedEye />} onClick={(event) => {this.getall(event,"Inspector")} } />
                  <MenuItem primaryText="All Vendors" leftIcon={<RemoveRedEye />} onClick={(event) => {this.getall(event,"Vendor")} } />
                  <MenuItem primaryText="All Items" leftIcon={<RemoveRedEye />}  />
                  <Divider />
                  <MenuItem primaryText="Add DyCEE" leftIcon={<PersonAdd />} onClick={(event) => {this.setState({flag : 2, open : !this.state.open }) }} />
                  <MenuItem primaryText="Update My_Infomation" leftIcon={<PersonAdd />} onClick={(event) => this.getPreviousInfo(event)} />
                  <Divider />
                  <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />

                </Menu>
            </Paper>
            : null
            }
            { this.state.flag == 1 ?

             <div>
             <Table style={style.tablediv}>
               <TableHead>
                  <TableRow>
                    <CustomTableCell width="25%">Id</CustomTableCell>
                    <CustomTableCell width="15%">Name</CustomTableCell>
                    <CustomTableCell width="25%">Email</CustomTableCell>
                    <CustomTableCell width="15%">Mobile</CustomTableCell>
                    <CustomTableCell width="15%">Location</CustomTableCell>
                  </TableRow>
                </TableHead>

                {this.rowsHandler()}


             </Table>
             </div>
            : null }

            {
              this.state.flag == 2 ?
              <div>
                <MuiThemeProvider>
                  <div>
                    <div style={styles.outerContainerStyle}>
                      <div style={styles.innerContainerStyle}>
                      <TextField
                        hintText="Cee_id"
                        floatingLabelText="Cee_id"
                        value = { this.state._id }
                        style={{ marginTop: 10 }}
                      />
                        <TextField
                          hintText="Name"
                          floatingLabelText="Name"
                          errorText="This field is required"
                          onChange = {(event,newValue) => this.setState({name:newValue})}
                          style={{ marginTop: 10 }}
                        />
                        <TextField
                          hintText="Email"
                          floatingLabelText="Email"
                          errorText="This field is required"
                          onChange = {(event,newValue) => this.setState({email:newValue})}
                          style={{ marginTop: 10 }}
                        />
                        <TextField
                          hintText="Mobile"
                          floatingLabelText="Mobile"
                          errorText="This field is required"
                          onChange = {(event,newValue) => this.setState({mobile:newValue})}
                          style={{ marginTop: 10 }}
                        />
                        <TextField
                          hintText="Location"
                          floatingLabelText="Location"
                          errorText="This field is required"
                          onChange = {(event,newValue) => this.setState({location:newValue})}
                          style={{ marginTop: 10 }}
                        />
                        <TextField
                          defaultValue= {this.state.role}
                          style={{ marginTop: 10 }}
                        />
                        <br/>
                        <RaisedButton label="ADD" primary={true} style={styles.buttonStyle} onClick={(event) => {this.addDyCEE(event)}} />

                      </div>
                    </div>
                  </div>
                </MuiThemeProvider>
              </div>
            //  this.state.dycee = false

                      : null
            }

            { this.state.flag == 3 ?
            <div style={styles.outerContainerStyle}>
              <div style={styles.innerContainerStyleUpdate}>
              <div>
              <span className="glyphicon glyphicon-check" aria-hidden="true" />
              <TextField
                hintText="Enter Dycee id"
                floatingLabelText="Id"
                value = {this.state._id}
                style={{ marginLeft: 10 ,marginRight : 10, marginTop : 5}}
              />
              </div>
              <div>
              <span className="glyphicon glyphicon-user" aria-hidden="true" />
              <TextField
                hintText="Enter name"
                floatingLabelText="Name"
                value = {this.state.name}
                onChange = {(event,newValue) => this.setState({name:newValue})}
                style={{ marginLeft: 10 ,marginRight : 10, marginTop : 2}}
              />
              </div>
              <div>
              <span className="glyphicon glyphicon-lock" aria-hidden="true" />
              <TextField
                hintText="Enter password"
                floatingLabelText="Password"
                value = {this.state.password}
                onChange = {(event,newValue) => this.setState({password:newValue})}
                style={{marginLeft: 10 ,marginRight : 10, marginTop : 2}}
              /></div>
              <div>
              <span className="glyphicon glyphicon-phone" aria-hidden="true" />
              <TextField
                hintText="Enter mobile number"
                floatingLabelText="Mobile Number"
                value = {this.state.mobile}
                onChange = {(event,newValue) => this.setState({mobile:newValue})}
                style={{marginLeft: 10 ,marginRight : 10, marginTop : 2 }}
              /></div>
              <div>
              <span className="glyphicon glyphicon-envelope" aria-hidden="true" />
              <TextField
                hintText="Enter email"
                floatingLabelText="Email"
                value = {this.state.email}
                onChange = {(event,newValue) => this.setState({email:newValue})}
                style={{ marginLeft: 10 ,marginRight : 10, marginTop : 2}}
              /></div>

              <RaisedButton label="UPDATE" primary={true} style={styles.buttonStyle} onClick={(event) => this.updateInfo(event)}/>

              </div>
            </div>
            : null
          }


          </div>
        </MuiThemeProvider>
      </div>
    );
  }

  addDyCEE(event){
    var that=this;
    var apiUrl=baseUrl + addDyCEEUrl;
    axios.post(apiUrl,{
        "name" : that.state.name ,
        "mobile" : that.state.mobile,
        "location" : that.state.location,
        "email" : that.state.email,
        "role" : that.state.role,
        "cee_id" : that.state._id
    })
   .then(response => {
       if(response.status == 200){
          alert("DyCee added successfully!");
         }
         else if(response.status == 204) {
           alert("DyCee is already present!");
         }
      })
   .catch(error => {
     alert(error.response.data.message);
   });

  }

  getPreviousInfo(event){

    var that = this;
    var apiUrl = baseUrl + getInfoUrl + that.state._id;

    axios.get(apiUrl)
    .then(function (response) {
      console.log(response);
      if(response.status == 200){
          that.setState({name : response.data.name , email : response.data.email, mobile : response.data.mobile, password : response.data.password, flag:3, open : !this.state.open});
      }
      else if(response.status == 404) {
        alert("No CEE found with this id");
      }
    })
    .catch(function (error) {
        alert(error.response.data.message);
    })
  }

  updateInfo(event){

    var that = this;
    var apiUrl = baseUrl + updateInfoUrl;

    axios.post(apiUrl,{
      "_id" : that.state._id,
      "name" : that.state.name,
      "mobile" : that.state.mobile,
      "email" : that.state.email,
      "password" : that.state.password,
      "role" : "CEE"
    })
    .then(function (response) {
      console.log(response);
      if(response.status == 200){
        alert("Information is updated successfully!");
      }
      else if(response.status == 204) {
        alert("Mobile number to be updated is already present!");
      }
    })
    .catch(function (error) {
      console.log(error.response);
      alert(error.response.data.message);
    });
  }

getall(event,role){

console.log(role);
  var that = this;
 that.setState({ open : !that.state.open });
 var apiUrl;
  if(role=="DyCEE")
   {apiUrl=baseUrl + allDyCeeUrl;}
  else if(role=="Inspector")
  {
    apiUrl=baseUrl + allInspectorUrl;
  }
  else if(role=="StoreOfficer")
  {
    apiUrl=baseUrl + allStoreOfficerUrl;
  }
  else if(role=="Vendor")
  {
    apiUrl=baseUrl + allVendorUrl;
  }
  console.log(apiUrl);
  axios.get(apiUrl)
  .then( response => {
    console.log(response);
    if(response.status == 200){
      that.setState({ getall : response.data , length : response.data.length , flag : 1 });
    }
    //);
  })
  .catch(error => {
    console.log(error.response);
    alert(error.response.data.message);
  });

}

singlerowHandler(i) {
  var cells = [];
  cells.push(<CustomTableCell width="25%">{this.state.getall[i]._id}</CustomTableCell>)
  cells.push(<CustomTableCell width="15%">{this.state.getall[i].name}</CustomTableCell>)
  cells.push(<CustomTableCell width="25%">{this.state.getall[i].email}</CustomTableCell>)
  cells.push(<CustomTableCell width="15%">{this.state.getall[i].mobile}</CustomTableCell>)
  cells.push(<CustomTableCell width="15%">{this.state.getall[i].location}</CustomTableCell>)

  return <TableRow>{cells}</TableRow>
}
rowsHandler()
{
  var cells = [];
  var i;
  for(i=0; i<this.state.getall.length ;i++)
  {
    cells.push(this.singlerowHandler(i))
  }
  return <TableBody>{cells}</TableBody>;
}


}
const styles = {
  outerContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #00BCD4',
    borderRadius: 25,
    margin: 70,
    padding: 30
  },
  buttonStyle: {
    margin: 15
  }
};



export default CeeHome ;
