
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
                var newArr = state.basket;
                for (let i = 0; i< state.basket.length; i++){
                    state.basket[i].id === action.payload ? newArr.splice(i, 1): console.log('Not Found')
                }
                return {
                    ...state,
                    basket: newArr
                }
            default:
                return state
    }
}

export default reducer;