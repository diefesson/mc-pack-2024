ServerEvents.recipes(event => {
    event.remove('minecraft:map')
    event.shaped(
        '4x minecraft:map',
        [
            'PPP',
            'PDP',
            'PPP'
        ],
        {
            P: 'minecraft:paper',
            D: '#forge:dyes',
        }
    )
})
