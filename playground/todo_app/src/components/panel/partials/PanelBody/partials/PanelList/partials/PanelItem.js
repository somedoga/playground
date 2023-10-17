import { createFontSize, styleObjectToString } from "../../../../../../../helpers/_apphelper.js"

const PANEL_ITEM = (item) => {
    
    const PANEL_ITEM_STYLE = {
        "font-size": createFontSize(18),
        
    }

    return (
        `
            <li data-id=${item.id} style='${styleObjectToString(PANEL_ITEM_STYLE)} 
                ${(() => { 
                    if (!item.last) 
                        return styleObjectToString({"margin-bottom": createFontSize(15)})

                    return ''
                })()}
                '
            >
                ${item.id} - ${item.text}
            </li>
        `
    )
}

export default PANEL_ITEM