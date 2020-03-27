import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField"
import TextField from '@material-ui/core/TextField';
import AppBar from "material-ui/AppBar"
import RaisedButton from "material-ui/RaisedButton"
import { addTuotteet } from './tuoteService';

export default class TuotteetLomakeVahvistus extends Component {
    tuote = {
        tuotenro: parseInt(this.props.values.tuotenro),
        tuotenimi: this.props.values.tuotenimi,
        tuntitavoite: parseInt(this.props.values.tuntitavoite)
    }
    
    continue = e => {
        e.preventDefault();
        //lähetetään apiin
        console.log(this.tuote);
        let tallennettu = addTuotteet(this.tuote);
        console.log(tallennettu);
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values } = this.props;
        
        return (            
            <MuiThemeProvider>
                <React.Fragment>
                <div style={shadow}>
                    <AppBar title="Tuotteet" showMenuIconButton={false}/>
                    <div style={padding}>
                        <TextField 
                            label="Tuotenumero" 
                            size="medium"
                            defaultValue={values.tuotenro}
                            InputProps={{ readOnly: true }}
                        />
                            <br></br>
                        <TextField 
                            label="Tuotteen nimi" 
                            size="medium"
                            defaultValue={values.tuotenimi}
                            InputProps={{ readOnly: true }}
                        />
                            <br></br>
                        <TextField 
                            label="Tuntitavoite kpl/tunti" 
                            size="medium"
                            defaultValue={values.tuntitavoite}
                            InputProps={{ readOnly: true }}
                        />
                            <br></br>
                        <RaisedButton
                            label="Takaisin"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                        <RaisedButton
                            label="Vahvista"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                    </div>
                </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const padding = {
    padding: "20px 50px 50px 50px",
    
}

const shadow = {
    textAlign: "center",
    margin: "0px",
    borderRadius: "10px",
    width: "fit-content",
    height: "fit-content",
    display: "inline-block",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

const styles = {
    button: {
        margin: 15
    }
}

