export function findProduct(items, code) {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if(item.code === code) {
            return item;
        }
    }
    return null;
}
