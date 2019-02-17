import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';


class BeerForm extends Component {
    render() {
        return (
            <div> 
             <TextField
               required
               id="outlined-required"
               label="Beer Name"
               defaultValue="Hello World"
               margin="normal"
               variant="outlined"
             />

            <TextField
              required
              id="outlined-required"
              label="Brewery"
              defaultValue="Local Brew Shop Co"
              margin="normal"
              variant="outlined"
            />
    
           <TextField
             required
             id="outlined-required"
             label="Style"
             defaultValue="Pilsner"
             margin="normal"
             variant="outlined"
           />
            
           <TextField
             required
             id="outlined-required"
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