export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/dashboards")
    const options = await response.json()
    
    let selectionHTML = `
        <select id="technology">
    `

    selectionHTML += options.map((option) => {
        return `<option value="${option.id}">${option.name}</option>`
    }).join("")

    selectionHTML += `
        </select>
    `

    return selectionHTML
}


