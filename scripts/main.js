const render = async () => {
    const containerEl = document.querySelector("#container")

    mainHTML = `
        <header>
            <h1>Cars 'R Us: Personal Car Builder</h1>
        </header>
        <main>
            <section id="options-section">
                <div class="option-card">
                    <h2>Paints</h2>

                </div>
                <div class="option-card">
                    <h2>Interior</h2>

                </div>
                <div class="option-card">
                    <h2>Wheels</h2>

                </div>
                <div class="option-card">
                    <h2>Technologies</h2>

                </div>
            </section>
        </main>
    `

    containerEl.innerHTML = mainHTML
}
            
render()
