import React, {Component} from 'react';


class NewQuote extends Component{

    render(){
        return(
            <div className="buttons">              
                <div className="container">
                    <button onClick = {this.props.onClick} className="btn effect01" ><span>New Quote</span></button>
                </div>
          </div>
        );

    }
}


export default NewQuote;