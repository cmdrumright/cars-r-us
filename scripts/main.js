import { paintOptions } from "./paints.js"
import { interiorOptions } from "./interiors.js"
import { wheelOptions } from "./wheels.js"
import { technologyOptions } from "./technologies.js"

const render = async () => {
    const containerEl = document.querySelector("#container")

    const paintsHTML = await paintOptions()
    const interiorsHTML = await interiorOptions()
    const wheelsHTML = await wheelOptions()
    const technologiesHTML = await technologyOptions()

    let mainHTML = `
        <header>
            <h1>Cars 'R Us: Personal Car Builder</h1>
        </header>
        <main>
            <section id="options-section">
                <div class="option-card">
                    <h2>Paints</h2>
                    ${paintsHTML}
                </div>
                <div class="option-card">
                    <h2>Interior</h2>
                    ${interiorsHTML}
                </div>
                <div class="option-card">
                    <h2>Wheels</h2>
                    ${wheelsHTML}
                </div>
                <div class="option-card">
                    <h2>Technologies</h2>
                    ${technologiesHTML}
                </div>
            </section>
        </main>
    `

    containerEl.innerHTML = mainHTML
}
            
render()
