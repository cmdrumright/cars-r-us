export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const options = await response.json()
    
    let selectionHTML = `
        <select id="paint">
    `

    selectionHTML += options.map((option) => {
        return `<option value="${option.id}">${option.name}</option>`
    }).join("")

    selectionHTML += `
        </select>
    `
    return selectionHTML
}
