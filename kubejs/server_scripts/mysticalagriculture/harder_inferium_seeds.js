ServerEvents.recipes(event => {
    event.remove({
        output: 'mysticalagriculture:inferium_seeds'
    })
    event.shaped(
        Item.of('mysticalagriculture:inferium_seeds'),
        [
            ' B ',
            'BSB',
            ' B '
        ],
        {
            B: 'mysticalagriculture:inferium_block',
            S: 'minecraft:wheat_seeds'
        }
    )
})
