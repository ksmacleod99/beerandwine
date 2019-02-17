import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

//my functional wine form component

class WineForm extends Component {
    render() {
         return (
            <div>
                <TextField
                  required
                  id="vintner"
                  label="Vintner"
                  defaultValue="Hello World Vineyards"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="wineStyle"
                  label="Style"
                  defaultValue="Pino Grigio"
                  margin="normal"
                  variant="outlined"
                />
               <TextField
                  required
                  id="wineYear"
                  label="Year"
                  defaultValue="2017"
                  margin="normal"
                  variant="outlined"
                />
             </div>
            )
    }
}

export default WineForm;