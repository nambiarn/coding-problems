export const isStringIncluded = (list, str) => {

    if (!list) return 'Please enter list in first parameter';
    if (!str || typeof (str) !== 'string') return 'Please enter string in second parameter';


    for (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() === str.toLowerCase()) return true
    }

    return false;
}