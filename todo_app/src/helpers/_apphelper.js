export const createFontSize = (number, type = "px") => {
    if (
        isNaN(number) ||
        number === undefined || 
        number === null
        ) return

    return `${number}${type}`
}

export const create = (node, id, classes) => {
    // return createElement(node)
}

export const insertHTML = (el, html, objParams) => {
    el.innerHTML += html(objParams)
}

export function styleObjectToString(styleObj) {
    let styleString = '';
    for (const key in styleObj) {
        if (styleObj.hasOwnProperty(key)) {
            styleString += `${key}:${styleObj[key]};`;
        }
    }
    return styleString;
}