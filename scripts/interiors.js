import { setInteriorSelection } from "./transientState.js"

const handleChange = (event) => {
    if (event.target.id === "interior") {
        setInteriorSelection(parseInt(event.target.value))
    }
}

export const interiorOptions = async () => {
    document.addEventListener("change", handleChange)

    const response = await fetch("http://localhost:8088/interiors")
    const options = await response.json()
    
    let selectionHTML = `
        <select id="interior">
    `

    selectionHTML += options.map((option) => {
        return `<option value="${option.id}">${option.name}</option>`
    }).join("")

    selectionHTML += `
        </select>
    `

    return selectionHTML
}

