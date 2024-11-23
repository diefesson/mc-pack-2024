ServerEvents.recipes(event => {
    event.shaped(
        'diefalpha:phantom_plate',
        [
            'PPP',
            'PSP',
            'PPP'
        ],
        {
            P: 'minecraft:phantom_membrane',
            S: '#forge:plates/silver'
        }
    )
    event.shaped(
        'minecraft:elytra',
        [
            'PSP',
            'P P',
            'P P'
        ],
        {
            'P': 'diefalpha:phantom_plate',
            'S': 'minecraft:diamond'
        }
    )
})
