export const initialState = {
	basket: [],
	user: null,
};

// selector
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price * item.qty + amount, 0);

export const getBasketSize = (basket) =>
	basket?.reduce((itemCount, item) => item.qty + itemCount, 0);
const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as it is not in basket!`
				);
			}
			return {
				...state,
				basket: newBasket,
			};
		case "UPDATE_ITEM":
			const item_Index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let new_Basket = [...state.basket];
			new_Basket[item_Index].qty = action.qty;
			return {
				...state,
				basket: new_Basket,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
