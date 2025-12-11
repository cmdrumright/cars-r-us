export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const options = await response.json()
    
    let selectionHTML = `
        <select id="interiors">
    `

    selectionHTML += options.map((option) => {
        return `<option value="${option.id}">${option.name}</option>`
    }).join("")

    selectionHTML += `
        </select>
    `

    return selectionHTML
}

