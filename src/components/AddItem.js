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
        this.handleBeer = this.handleBeer.bind(this);
        this.handleWine = this.handleWine.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
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

    handleBeer() {
        this.setState({isBeer: true});
    }
    handleWine(){
        this.setState({isBeer: false});
    }
    handleLike(){
        this.setState({liked: true});
    }
    handleDislike(){
        this.setState({liked: false});
    }

    createItem(event){
        event.preventDefault();
        this.setState()
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
                        onClick={this.handleBeer}
                        value="Beer"
                        name="Beer"
                        aria-label="Beer"
                    />
                } label="Beer" />
                <FormControlLabel value="wine" control={
                    <Radio
                        checked={this.state.isBeer === false}
                        onClick={this.handleWine}
                        value="Wine"
                        name="Wine"
                        aria-label="Wine"
                    />
                } label="Wine" />       

                { /* Heart if liked, 'No' symbol if not */ }
                <FormControlLabel value="like" control={
                    <Radio
                        checked={this.state.liked === true}
                        onClick={this.handleLike}
                        value="I liked it"
                        name="like"
                        aria-label="I liked it"
                    />
                } label="Liked It" />
                <FormControlLabel value="dislike" control={
                    <Radio
                        checked={this.state.liked === false}
                        onClick={this.handleDislike}
                        value="I did not like it"
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