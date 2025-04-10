ServerEvents.tags('item', event => {
    let consumePrevented = [
        'artifacts:everlasting_beef',
        'artifacts:eternal_steak',
        'artifacts:onion_ring',
    ]

    for (let item of consumePrevented) {
        event.add('biomancy:cannot_be_digested_in_acid', item)
        event.add('biomancy:cannot_be_eaten_by_cradle', item)
    }
})