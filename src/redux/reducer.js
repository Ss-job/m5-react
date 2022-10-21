import types from '../actions/types';

let initialState = {

    filter: {
        inputSearchField: null,
        countryID: null,
        compositionID: null,
        qualityID: null,
        catalogID: null,
        name: null,
        priceFrom: null,
        priceTo: null,
        yearFrom: null,
        yearTo: null
    }

}


export default function reducer(state = initialState, action) {
    console.log(action);
    // cleanFilters(state.filter);

    if(action.type === types.addToStoreCatalog) {
        return{
            ...state,
            filter: {
                ...state.filter,
                ...action.payload
            }
        }
    } else if (action.type === types.addToFilterCountry) {
        console.log(action+'******')
        return{
            ...state,
            filter: {
                ...state.filter,
                ...action.payload
            }
        }
    }
    else if (action.type === types.addToFilterComposition) {
        // console.log(action)
        return{
            ...state,
            filter: {
                ...state.filter,
                ...action.payload
            }
        }
    } else if (action.type === types.addToFilterQuality) {
        // console.log(action)
        return{
            ...state,
            filter: {
                ...state.filter,
                ...action.payload
            }
        }
    } else if (action.type === types.addToFilterName) {
        // console.log(action)
        return{
            ...state,
            filter: {
                ...state.filter,
                ...action.payload
            }
        }
    }  else {
        return state;
    }
    
}

// function cleanFilters (filter) {
//     for (let filters in filter) {
//         state.filter[filters]=null;
//     }
// }

// function addFilter (property, value, state) {
//     return{
//     ...state,
//             filter: {
//                 ...state.filter,
//                 ...action.payload
//             }
//         }
// }

console.log(initialState);
