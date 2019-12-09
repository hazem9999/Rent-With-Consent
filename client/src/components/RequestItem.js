import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup} from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class RequestItem extends Component {
    getStyle = () => {
       return{
           background: '#f4f4f4',
           padding: '25px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.request.available=='Yes' ? 'none' : 'line-through'
       }
    }
    


    render() {
        const { _id, vehicleName, rentingFee, available } = this.props.request;
        return (
            <div style={this.getStyle()}>
                <p>
                    {vehicleName}    |   
                    renting fee: {rentingFee}   |        
                    Available?:  {available}
                    <ButtonGroup style = {btnStyle2}>
                    <Button outline color = "danger" style = {btnStyle2} onClick={this.props.Canceled.bind(this, _id)}>Cancel</Button>
                    <Button outline color = "success" style = {btnStyle2} onClick={this.props.Rented.bind(this, _id)}>Rent</Button>{' '}
                    </ButtonGroup>
                    </p>
            </div>
        )
    }
}
//onClick={this.props.accept.bind(this, _id)}
//<button onClick={this.props.delRequest.bind(this, id)} style={btnStyle1}>x</button>
RequestItem.propTypes = {
    request: PropTypes.object.isRequired
  }

const btnStyle1 = {
    background: '#ff0000',
    color:'#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const btnStyle2 = {
    float: 'right',
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default RequestItem
