import { setPaintSelection } from "./transientState.js"

const handleChange = (event) => {
    if (event.target.id === "paint") {
        setPaintSelection(parseInt(event.target.value))
    }
}

export const paintOptions = async () => {
    document.addEventListener("change", handleChange)

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
