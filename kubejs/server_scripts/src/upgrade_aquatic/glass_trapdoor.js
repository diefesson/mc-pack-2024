ServerEvents.recipes(event => {
    // Change Glass Trapdoor recipe to be more standard
    event.remove('upgrade_aquatic:glass_trapdoor')
    event.shaped(
        'upgrade_aquatic:glass_trapdoor',
        [
            'GGG',
            'GGG',
        ],
        {
            G: 'minecraft:glass'
        }
    )
})
