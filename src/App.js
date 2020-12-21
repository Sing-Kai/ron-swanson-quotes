import React, {Component} from 'react';
import Quote from './components/Quote';
import {connect} from 'react-redux';
import { fetchQuote } from './actions/ActionCreators';
import './App.scss';
import NewQuote from './components/NewQuote';
// import * from './redux/ActionCreators';


const mapStateToProps = state =>{

  return{
    quote: state.quote
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchQuote: () => dispatch(fetchQuote())
})

class App extends Component {

  componentDidMount(){
    this.props.fetchQuote();
  }

  onClick = () =>{
    this.props.fetchQuote();
  }

  render(){
    return (
        <div className = 'landing-body'>
            <h1 className='landing-header'> 
                <div className='header-primary'>
                    <Quote quote = {this.props.quote}/> 
                </div>
                <NewQuote onClick= {this.onClick}/>
            </h1>

        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
