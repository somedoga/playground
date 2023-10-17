import { createFontSize, insertHTML, styleObjectToString } from "../../helpers/_apphelper.js"
import { PANEL_BODY, PANEL_HEADER } from './partials/index.js'

const PANEL_BACKGROUND = '#222'
const PANEL_WIDTH = 400
const PANEL_HEIGHT = 280
const PANEL_RADIUS = 8
const PANEL_PADDING = 30
const PANEL_COLOR = '#fff'

// const PANEL = document.createElement("div")

// PANEL.style.width = createFontSize(PANEL_WIDTH)
// PANEL.style.height = createFontSize(PANEL_HEIGHT)
// PANEL.style.padding = createFontSize(PANEL_PADDING)
// PANEL.style.borderRadius = createFontSize(PANEL_RADIUS)
// PANEL.style.backgroundColor = PANEL_BACKGROUND
// PANEL.style.color = PANEL_COLOR

const PANEL = () => {

    const PANEL_STYLE = {
        background: '#222',
        width: createFontSize(400),
        height: createFontSize(280),
        padding: createFontSize(30),
        color: "#fff",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        "border-radius": createFontSize(8),
    }

    return (
        `
            <div style='${styleObjectToString(PANEL_STYLE)}'>
                ${(() => PANEL_HEADER({text: "hello"}) + PANEL_BODY()
                )()}
            </div>
        `
    )
}


// PANEL.innerHTML = PANEL_HEADER({text: 'hello world'})
// insertHTML(PANEL, PANEL_HEADER, {text: "hello world"})
// insertHTML(PANEL, PANEL_BODY)

export default PANEL