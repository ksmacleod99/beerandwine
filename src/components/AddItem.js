import React, {Component} from 'react';
import BeerForm from './BeerForm/BeerForm';
import WineForm from './WineForm/WineForm';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//this component should take all of the user inputs and pass the input through Record and add it to the MyList 
//my form state lives here

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.localHandleChange = this.localHandleChange.bind(this); //handles changes on this component
        {/*this.handleBeerChange = this.handleBeerChange.bind(this); //handle changes on beerForm
        this.handleWineChange = this.handleWineChange.bind(this); //handles changes on wineForm */}
        this.createItem = this.createItem.bind(this);
        this.state = {
            isBeer: true,
            liked: true,
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
    localHandleChange(event) {
        this.setState({
            isBeer: event.isBeer.value
         });
         console.log(this.state);
    }

    createItem(event){
        event.preventDefault();
    }

    render (){
      const isBeer = this.state.isBeer;
        let form;

        if (isBeer) {
            form = <BeerForm />
         } else {
            form = <WineForm />
        } 

        return(
            <div>
            <form onSubmit={this.createItem} className="add-form">
            <div className='card'>

                { /* Radio buttons and logic for Beer / Wine */ }

                <FormControlLabel value="beer" control={
                    <Radio
                        checked={this.state.isBeer === true}
                        onChange={this.localHandleChange}
                        value = {true}
                        name="Beer"
                        aria-label="Beer"
                    />
                } label="Beer" />
                <FormControlLabel value="wine" control={
                    <Radio
                        checked={this.state.isBeer === false}
                        onChange={this.localHandleChange}
                        value = {false}
                        name="wine"
                        aria-label="Wine"
                    />
                } label="Wine" />       

                { /* Heart if liked, 'No' symbol if not */ }
                <FormControlLabel value="like" control={
                    <Radio
                        checked={this.state.liked === true}
                        onChange={this.localHandleChange}
                        value="like"
                        aria-label="I liked it"
                    />
                } label="Liked It" />
                <FormControlLabel value="dislike" control={
                    <Radio
                        checked={this.state.liked === false}
                        onChange={this.localHandleChange}
                        value="dislike"
                        name="dislike"
                        aria-label="I did not like it"
                    />
                } label="Didn't Like It" />    

                {form}       
                <TextField
                 id="notes"
                 label="Notes"
                 multiline
                 rows="4"
                 defaultValue="What did you think?"
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