let initialState= {
    bestFriend: [
        { id: 1, name: 'Olezha' },
        { id: 2, name: 'Ilya' },
        { id: 4, name: 'Liza' }
    ]
}

const sidebarReducer = (state = initialState, action) => {

    switch (action.type) {
       
        default:
            return state;
    }
}

export default sidebarReducer;
