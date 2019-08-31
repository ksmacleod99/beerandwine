import React, {Component} from 'react';
import BeerForm from './BeerForm/BeerForm';
import WineForm from './WineForm/WineForm';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//this component should take all of the user inputs and pass the input through Record and add it to the MyList 
//my form state lives here

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.localHandleChange = this.localHandleChange.bind(this); //handles changes on this component
        this.handleLikeChange = this.handleLikeChange.bind(this);
        this.handleBeerChange = this.handleBeerChange.bind(this); //handle changes on beerForm
       /*  this.handleWineChange = this.handleWineChange.bind(this); //handles changes on wineForm */
        this.createItem = this.createItem.bind(this);
        this.state = {
            isBeer: '',
            liked: '',
            beerName: '',
            brewery: '',
            beerStyle: '',
            beerYear: '',
            vintner: '',
            wineStyle: '',
            wineYear: '',
            notes: '',
        };
    }


    localHandleChange(e) {
        this.setState({
            isBeer: e.target.value
        })
        console.log(this.state)
    }

    handleLikeChange(e) {
        this.setState({
            liked: e.target.value
        })
        console.log(this.state)
    }

    handleBeerChange(e){
        const name = e.target.name;
        const value = e.target.value;
       
        this.setState({
           [name]: value
        })
    }

    createItem(e){
        e.preventDefault();
        console.log(this.state)
    }

    render (){
        const isBeer = this.state.isBeer;
        let form;

        if (isBeer === "wine") {
            form = <WineForm />
         } else {
            form = <BeerForm onBeerUpdate={this.handleBeerChange} />
        } 
        return(
            <div>
            <form onSubmit={this.createItem} className="add-form">
            <div className='card'>

                { /* Radio buttons and logic for Beer / Wine */ }

                <FormControl component="fieldset">
                <FormLabel component="legend">Beer or Wine?</FormLabel>
                    <RadioGroup
                        onChange={this.localHandleChange}
                        value={this.value}
                        name="isBeer"
                        aria-label="Beer or wine"
                    >
                        <FormControlLabel value="beer" control={<Radio />} label="Beer" />
                        <FormControlLabel value="wine" control={<Radio />} label="Wine" />
                    </RadioGroup>
                </FormControl>

                { /* Heart if liked, 'No' symbol if not */ }

                <FormControl component="fieldset">
                <FormLabel component="legend">Did you like it?</FormLabel>
                    <RadioGroup
                        onChange={this.handleLikeChange}
                        value={this.value}
                        name="liked"
                        aria-label="Did you like it"
                    >
                        <FormControlLabel value="true" control={<Radio />} label="I liked it" />
                        <FormControlLabel value="false" control={<Radio />} label="I did not like it" />
                    </RadioGroup>
                </FormControl>

                {form}       
                <TextField
                 id="notes"
                 label="Notes"
                 multiline
                 rows="4"
                 defaultValue=""
                 margin="normal"
                 variant="outlined"
                 />
            </div>
               
            <Button variant="contained" color="primary" type="submit">Add</Button>
            <Button variant="text" color="secondary">Reset</Button> 
            </form>
            
            </div> 
        )
    }
}

export default AddItem;