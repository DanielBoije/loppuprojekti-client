import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
export default class Hairio extends Component {
    poista = () => {
        this.props.poista(this.props.lista.id)
    }
    render() {
        return (
            <tr style={list}>
                {/* <td>{this.props.lista.id}</td> */}
                <td style={tilaa}>{this.props.lista.hairio}</td><br/><br/>
                {/* <td><button type="button">&#9998;</button></td> */}
                <td><Button size="small"  variant="contained" color="secondary" onClick={this.poista} startIcon={<DeleteIcon />}>Poista</Button> </td>
            </tr>
        )
    }
}

const list = {
    textAlign: "left"
}

const poista = {
    color: "red"
}

const tilaa = {
    padding: "10px"
}