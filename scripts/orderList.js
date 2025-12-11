export const orderList = async () => {
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()

    let ordersHTML = orders.map((order) => {
        return `
            <div class="order-card">
                Order #${order.id}
            </div>
        `
    }).join("")
    
    return ordersHTML
}
