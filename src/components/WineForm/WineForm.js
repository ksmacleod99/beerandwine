import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class WineForm extends Component {
    render() {
         return (
            <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Vintner"
                  defaultValue="Hello World Vinyards"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Style"
                  defaultValue="Pino Grigio"
                  margin="normal"
                  variant="outlined"
                />
               <TextField
                  required
                  id="outlined-required"
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