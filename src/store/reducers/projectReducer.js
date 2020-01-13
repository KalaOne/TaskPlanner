
const initState = {
    projects: [
        {id: '1', title: 'collect apples with me', content: 'badum tsss'},
        {id: '2', title: 'collect videogames on sale', content: 'Making profit - yeah!'},
        {id: '3', title: 'build a jetpack', content: 'Easier than it sounds'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT' :
            console.log("created a new project", action.project)
    }
    return state
}

export default projectReducer