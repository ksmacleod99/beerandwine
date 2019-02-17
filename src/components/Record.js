import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './styles.css';

//This component is a template for how records should look on MyList.  It should take inputs from AddItem 

class Record extends Component {
    render (){
        return(
            <div className='card'>
                <ul>
                    <li>Beer / Wine</li>
                    <li>Heart if liked, 'No' symbol if not</li>
                    <li>$Beer Name $BreweryName $Year</li>
                    <li>Style</li>
                    <li>$Vintner $Style $Year</li>
                    <li>Notes</li>
                </ul>
            <Button variant="contained" color="primary">Edit</Button>
            <Button variant="contained" color="secondary">Remove</Button>
            </div>
        )
    }
}

export default Record;