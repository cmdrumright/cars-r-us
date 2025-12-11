const transientState = {
    paintId: 0,
    interiorId: 0,
    dashboardId: 0,
    wheelId: 0
}

export const setPaintSelection = (selectionId) => transientState.paintId = selectionId
export const setInteriorSelection = (selectionId) => transientState.interiorId = selectionId
export const setDashboardSelection = (selectionId) => transientState.dashboardId = selectionId
export const setWheelSelection = (selectionId) => transientState.wheelId = selectionId
export const placeOrder = async () => {
    if (transientState.paintId > 0 &&
        transientState.interiorId > 0 &&
        transientState.dashboardId > 0 &&
        transientState.wheelId > 0) {
        const postOptions = {
        	method: "POST",
            headers: {
            	"Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }

        response = await fetch("http://localhost:8088/orders", postOptions)

        const orderEvent = new CustomEvent("orderPlaced")
        document.dispatchEvent(orderEvent)

    } else {
        window.alert("All selections not made yet")
    }
}
