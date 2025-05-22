ServerEvents.recipes(event => {
    event.remove('minecraft:map')
    event.shaped(
        'minecraft:map',
        [
            'PPP',
            'PDP',
            'PPP'
        ],
        {
            P: 'minecraft:paper',
            D: '#forge:dyes',
        }
    ).id('diefalpha:map')
})
