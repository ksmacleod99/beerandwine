import React, {Component} from 'react';
import Record from './Record';
import './styles.css';

class MyList extends Component {
    render (){
        return(
            <div className='listBox'>
                <p>I am the box where the list of beers or wines users have already tried will appear.</p>
                <p>I will be stortable & searchable</p>
                <Record />
            </div>
        )
    }
}

export default MyList;