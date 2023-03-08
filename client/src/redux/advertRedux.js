//selectors

// actions

const createActionName = actionName => `app/advertisers/${actionName}`;
const LOG_IN = createActionName('LOG_IN');

// action creators

export const logIn = payload => ({
    type: LOG_IN,
    payload
})

const advertReducer = (statePart = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload;
        default:
            return statePart;
    }
}

export default advertReducer;