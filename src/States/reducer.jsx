
import ShoesDetails from '../data/ShoesDetails'
import ShoesList from '../data/ShoesList'


export const initialState = {
    shoesHome: ShoesDetails,
    shoesProduct: ShoesList,
    basket: []
}   


const reducer = (state, action) => {
    switch(action.type){
        case 'Add_To_Basket':
            return {
                ...state,
                basket: [action.payload, ...state.basket]
            }
            case 'Remove_From_Basket':
                return {
                    ...state,
                }
            default:
                return state
    }
}

export default reducer;