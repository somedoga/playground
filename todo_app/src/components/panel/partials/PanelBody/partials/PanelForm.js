import { styleObjectToString } from "../../../../../helpers/_apphelper.js"

const PANEL_FORM = () => {

    let inputRef = document.getElementById('addTodo');

    const PANEL_FORM_STYLE = {
        display: "flex"
    }
    const handleRequest = () => {
        
    }
    
    return (
        `<form style='${styleObjectToString(PANEL_FORM_STYLE)}'>
            <input id='addTodo' style='flex:1' type="text" />
            <button type='submit' onclick=${handleRequest()}>Add Todo</button>
        </form>
        `
    )
}

export default PANEL_FORM