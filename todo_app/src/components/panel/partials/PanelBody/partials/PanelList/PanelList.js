import { insertHTML, styleObjectToString } from "../../../../../../helpers/_apphelper.js";
import PANEL_ITEM from "./partials/PanelItem.js"

const PANEL_LIST = (arr) => {

    const PANEL_LIST_STYLE = {
        "list-style": "none",
        padding: 0,
        margin: 0,
        flex: 1
    }

    return `
        <ul style='${styleObjectToString(PANEL_LIST_STYLE)}'>
            ${(() => {
            let arg = [];
            for (let i = 0; i < arr.length; i++) {
                arg +=  PANEL_ITEM(arr[i])
            }
            return arg
        })()}
        </ul>
    `
}

export default PANEL_LIST
