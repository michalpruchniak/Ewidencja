const { initial } = require("lodash");

const INITIAL_TYPES = {
    list: [{
        id: 1,
        name: 'Komputer PC'
    }]
};

const types = (state = INITIAL_TYPES, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default types;