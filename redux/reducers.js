import { UPDATE_TEXT, FILTER_BY_NAME } from "./actions";
const data = require('../TestBD/MOCK_DATA_GLOW.json');

const initialState = {
    text: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        //case UPDATE_TEXT:
        //   return { ...state, text: action.payload };
        case FILTER_BY_NAME: 
            return ( {...state, text: data.filter(person => person["first_name"].toLowerCase().startsWith((action.payload).toLowerCase()))}
            );
        default:
            return state;
    }
}

export default userReducer;


//Aqui es donde se deberia importar la base de datos con los nombres
//En el caso de, no se, FILTER_BY_NAME lo que se debe retornar sería el objeto, con algo como  mock.filter(person => person["first_name"].includes(sub));