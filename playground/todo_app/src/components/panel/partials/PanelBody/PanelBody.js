import PANEL_LIST from "./partials/PanelList/PanelList.js"
import PANEL_FORM from "./partials/PanelForm.js"



const PANEL_BODY = () => {

    const array = [
        {text: "hello", id: 0},
        {text: "selam", id: 1, last: true}
    ]

    return PANEL_LIST(array) + PANEL_FORM()
}

// document.getElementById("addTodo")?.addEventListener("keypress", alert("s"))

export default PANEL_BODY