ServerEvents.recipes(event => {
    event.remove('upgrade_aquatic:bedroll')

    // Change Glass Trapdoor recipe
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
