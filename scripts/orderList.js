export const orderList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=wheel&_expand=paint&_expand=interior&_expand=dashboard")
    const orders = await response.json()

    let ordersHTML = orders.map((order) => {
        const price = order.wheel.price + order.paint.price + order.interior.price + order.dashboard.price
        const localPrice = price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        return `
            <div class="order-card">
                Order #${order.id} price: ${localPrice}
            </div>
        `
    }).join("")
    
    return ordersHTML
}
