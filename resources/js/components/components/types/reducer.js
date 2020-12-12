const { initial } = require("lodash");

// In original db programmer add a column "parent_id" what it doesn't nessesery.
// So I remove that but I left the original id
const INITIAL_TYPES = {
    list: [
        {
            id: 2,
            name: 'Komputer stacjonarny'
        },
        {
            id: 3,
            name: 'Laptop'
        },
        {
            id: 4,
            name: 'Notebook'
        },
]
};

const types = (state = INITIAL_TYPES, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default types;