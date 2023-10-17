import { createFontSize } from "./helpers/_apphelper.js"
import PANEL from "./components/panel/Panel.js"

// ENV VARIABLES
const BODY_BACKGROUND = "#333"

const BODY = document.body

BODY.style.margin = 0
BODY.style.background = BODY_BACKGROUND

const APP = document.getElementById("app")

APP.style.height = createFontSize(100, "vh")
APP.style.display = "flex"
APP.style.justifyContent = "center"
APP.style.alignItems = "center"


APP.innerHTML = PANEL()

