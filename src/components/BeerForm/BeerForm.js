import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

//my functional beer form component

class BeerForm extends Component {
    render() {
        return (
            <div> 
             <TextField
               required
               id="beerName"
               label="Beer Name"
               defaultValue="Hello World"
               margin="normal"
               variant="outlined"
             />

            <TextField
              required
              id="brewery"
              label="Brewery"
              defaultValue="Local Brew Shop Co"
              margin="normal"
              variant="outlined"
            />
    
           <TextField
             required
             id="beerStyle"
             label="Style"
             defaultValue="Pilsner"
             margin="normal"
             variant="outlined"
           />
            
           <TextField
             required
             id="beerYear"
             label="Year"
             defaultValue="2019"
             margin="normal"
             variant="outlined"
           />
        </div>

        )
    }
}

export default BeerForm;