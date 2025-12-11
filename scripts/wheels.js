import { setWheelSelection } from "./transientState.js"

const handleChange = (event) => {
    if (event.target.id === "wheel") {
        setWheelSelection(parseInt(event.target.value))
    }
}

export const wheelOptions = async () => {
    document.addEventListener("change", handleChange)

    const response = await fetch("http://localhost:8088/wheels")
    const options = await response.json()
    
    let selectionHTML = `
        <select id="wheel">
    `

    selectionHTML += options.map((option) => {
        return `<option value="${option.id}">${option.name}</option>`
    }).join("")

    selectionHTML += `
        </select>
    `

    return selectionHTML
}


