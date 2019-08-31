import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

//my functional beer form component

class BeerForm extends Component {
  constructor(props){
    super(props);
    this.beerHandleChange = this.beerHandleChange.bind(this);
    this.state  =
    {
      beerName: '',
      brewery: '',
      beerStyle: 'Pilsner',
      beerYear: '2019',
    }

  }

  beerHandleChange(e){
  this.props.onBeerUpdate(e.target.value); 
  /* const name = e.target.name;
    const value = e.target.value;
 
    this.setState ({
      [name]: value
    }) */
    }

    render() {
      const beerName = this.props.beerName;
      const brewery = this.props.brewery;
      const beerStyle = this.props.beerStyle;
      const beerYear = this.props.beerYear;

        return (
            <div> 
             <TextField
               required
               name="beerName"
               label="Beer Name"
               margin="normal"
               variant="outlined"
               value={beerName}
               onChange={this.beerHandleChange}
             />

            <TextField
              required
              name="brewery"
              label="Brewery"
              margin="normal"
              variant="outlined"
              value={brewery}
              onChange={this.beerHandleChange}
            />
    
           <TextField
             required
             name="beerStyle"
             label="Style"
             defaultValue="Pilsner"
             margin="normal"
             variant="outlined"
             value={beerStyle}
             onChange={this.beerHandleChange}
           />
            
           <TextField
             required
             name="beerYear"
             label="Year"
             defaultValue="2019"
             margin="normal"
             variant="outlined"
             value={beerYear}
             onChange={this.beerHandleChange}
           />
        </div>

        );
    }
}

export default BeerForm;