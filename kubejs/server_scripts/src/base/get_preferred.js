const getPreferred = (tag) => {
    let item = AlmostUnified.getPreferredItemForTag(tag)
    if (item == null) {
        item = Item.of(`#${tag}`)
    }
    return item
}