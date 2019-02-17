import React, {Component} from 'react';
import BeerForm from './BeerForm/BeerForm';
import WineForm from './WineForm/WineForm';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

//this component should take all of the user inputs and pass the input through Record and add it to the MyList 

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.handleBeer = this.handleBeer.bind(this);
        this.handleWine = this.handleWine.bind(this);
        this.state = {isBeer: true};
    }

    handleBeer() {
        this.setState({isBeer: true});
    }

    handleWine(){
        this.setState({isBeer: false});
    }
  
    render (){
      const isBeer = this.state.isBeer;
        let form;

        if (isBeer) {
            form = <BeerForm />
            console.log('beeeeerrr')
        } else {
            form = <WineForm />
            console.log('wine is fine')
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
            {form}       
            { /*  Notes */ }
            </div>
               
            <Button variant="contained" color="primary" type="submit">Add</Button>
            <Button variant="text" color="secondary">Reset</Button> 
            </form>
            
            </div> 
        )
    }
}

export default AddItem;