import { fetchUser, fetchCart } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()
const cartInfo = fetchCart()

const initialState = {
    user: userInfo,
    foodItem: null,
    cartShow: false,
    cartItems: cartInfo
}

export default initialState