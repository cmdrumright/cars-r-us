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
