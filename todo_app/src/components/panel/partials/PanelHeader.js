// const PANEL_HEADER_ELEMENT = document.createElement("div")

import { styleObjectToString } from '../../../helpers/_apphelper.js'

const PANEL_HEADER = (params) => {
    
    const PANEL_HEADER_STYLE = {
        color: "white",
        "font-size": "24px",
        "font-weight": "600",
        "margin-bottom": "30px",
        "text-align": "center",
        "text-transform": "uppercase",
    }

    return `<div style=${styleObjectToString(PANEL_HEADER_STYLE)}>${params.text}</div>`
}

export default PANEL_HEADER