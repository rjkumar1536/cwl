import React, { Component } from 'react';
import * as MaterialIcon from 'react-icons/lib/md';


export default class CeePalette extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: '280px', backgroundColor: '#f7f1e3', padding: '20px' , height : '100%'}}>

        <a onClick={this.props.onClickAddDycee} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPersonAdd size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Add DyCEE</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickDycee} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPeopleOutline size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>DyCEE</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickVendors} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPeopleOutline size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Vendors</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickInspectors} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPeopleOutline size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Inspectors</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickStoreOfficers} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPeopleOutline size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>StoreOfficers</span>
        </a>
        <div style={styles.dividerStyle}/>


        <a onClick={this.props.onClickPurchaseOrders} style={styles.innerContainerStyle}>
          <MaterialIcon.MdChromeReaderMode size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Purchase Orders</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickItems} style={styles.innerContainerStyle}>
          <MaterialIcon.MdShoppingBasket size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Items</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickIC} style={styles.innerContainerStyle}>
          <MaterialIcon.MdReceipt size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Inspection Certificates</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickIR} style={styles.innerContainerStyle}>
          <MaterialIcon.MdFeaturedPlayList size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Inspection Reports</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickCorrigendums} style={styles.innerContainerStyle}>
          <MaterialIcon.MdDescription size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Corrigendums</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickProfile} style={styles.innerContainerStyle}>
          <MaterialIcon.MdFace size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>My Profile</span>
        </a>
        <div style={styles.dividerStyle}/>

      </div>
    );
  }
}

const styles = {
  innerContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px',
    width: '100%',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  textStyle: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    marginLeft: '24px'
  },
  dividerStyle: {
    height: '1px',
    backgroundColor: '#d1ccc0'
  },
  iconSize: 18
};