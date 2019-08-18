import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

//my functional beer form component

class BeerForm extends Component {
  constructor(props){
    super(props);
    this.beerHandleChange = this.beerHandleChange.bind(this);
    this.state = {
      beerName: '',
      brewery: '',
      beerStyle: '',
      beerYear: '',
    };
  }
  beerHandleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    render() {
        return (
            <div> 
             <TextField
               required
               name="beerName"
               label="Beer Name"
               margin="normal"
               variant="outlined"
               value={this.state.beerName}
               onChange={this.beerHandleChange}
             />

            <TextField
              required
              name="brewery"
              label="Brewery"
              margin="normal"
              variant="outlined"
              value={this.state.brewery}
              onChange={this.beerHandleChange}
            />
    
           <TextField
             required
             name="beerStyle"
             label="Style"
             defaultValue="Pilsner"
             margin="normal"
             variant="outlined"
             value={this.state.beerStyle}
             onChange={this.beerHandleChange}
           />
            
           <TextField
             required
             name="beerYear"
             label="Year"
             defaultValue="2019"
             margin="normal"
             variant="outlined"
             value={this.state.beerYear}
             onChange={this.beerHandleChange}
           />
        </div>

        );
    }
}

export default BeerForm;