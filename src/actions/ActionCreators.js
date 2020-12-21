import axios from 'axios';
import {ronswansonUrl} from '../url/baseUrl';
import {NEW_QUOTE} from './types';

export const fetchQuote = ()=> async (dispatch) =>{
    const res = await axios.get(ronswansonUrl);
    dispatch({type: NEW_QUOTE, payload: res.data});
}