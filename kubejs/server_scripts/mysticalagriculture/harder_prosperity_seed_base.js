ServerEvents.recipes(event => {
    event.remove({
        output: 'mysticalagriculture:prosperity_seed_base'
    })
    event.shaped(
        Item.of('mysticalagriculture:prosperity_seed_base'),
        [
            ' B ',
            'BSB',
            ' B '
        ],
        {
            B: 'mysticalagriculture:prosperity_block',
            S: 'minecraft:wheat_seeds'
        }
    )
})
