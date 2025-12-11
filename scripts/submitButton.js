import { placeOrder } from "./transientState"

const handleClick = (event) => {
    if (event.target.id === "submit") {
        placeOrder()
    }
}

export const submitButton = () => {
    document.addEventListener("click", handleClick)
    return `
        <button type="button" id="submit">Place Order</button>
    `
}
