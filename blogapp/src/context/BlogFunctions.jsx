export default function BlogFunctions(state, action) {
    switch(action.type)
    {
        case 'SET_LOADING':
            return{
                ...state, 
                loading : true,
            }
        case 'SET_API_DATA':
            console.log(action.payload)
            return {
                ...state,
                loading : false,
                blogs : action.payload,
            }
    }
}
