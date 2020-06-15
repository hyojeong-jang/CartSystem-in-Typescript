import * as types from '../types/index';

export const APPLY_DISCOUNT = 'APPLY_DISCOUNT' as const;

// interface ApplyDiscountAction {
//   type: typeof APPLY_DISCOUNT;
//   payload: types.ApplyDiscount;
// }

// export type DiscountActionTypes =
//   | ApplyDiscountAction;


// export const applyDiscount = (discount: types.ApplyDiscount) => ({
//   type: APPLY_DISCOUNT,
//   payload: discount
// })


// export const actionCreators = {
//   applyDiscount
// };



// const initialState: types.DiscountDetailState = {
//   detail: [
 
//   ]
// };

// export function DiscountDetailReducer(
//   state = initialState,
//   action: DiscountActionTypes
// ): types.DiscountDetailState {
//   switch (action.type) {
//     case APPLY_DISCOUNT:
//       return {
//         ...state,
//         // detail: state.detail.push(action.payload)
//       };
//     default:
//       return state;
//   }
// }
