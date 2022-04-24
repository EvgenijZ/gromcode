import { OPTION_TOGGLE } from './options.actions';

const initialState = {
    optionsList: [
        {
            id: 'id-0',
            name: '19-inch wheels',
        },
        {
            id: 'id-1',
            name: 'Leather-trimmed Sport Seats',
        },
        {
            id: 'id-2',
            name: 'B&O Sound System',
        },
        {
            id: 'id-3',
            name: 'Adaptive Cruise Control',
        },
        {
            id: 'id-4',
            name: 'Daytime running lights',
        },
        {
            id: 'id-5',
            name: 'Auto High-Beam Headlamps',
        },
        {
            id: 'id-6',
            name: 'Carbon Sport Interior',
        },
    ],
    selected: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPTION_TOGGLE:
            return {
                ...state,
                selected: state.selected.includes(action.payload) ?
                    state.selected.filter(id => id !== action.payload) :
                    state.selected.concat(action.payload)
            }
        default:
            return state;
    }
}