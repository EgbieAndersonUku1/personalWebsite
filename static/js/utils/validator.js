


export default function isElementValid(element) {

    if (!(element instanceof HTMLElement)) {
        throw new Error(`The element (${element}) is not a valid element DOM`)
    }
}
