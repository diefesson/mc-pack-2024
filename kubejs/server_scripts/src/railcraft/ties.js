ServerEvents.recipes(event => {
    // Use Immersive Engineering treated sticks to make ties
    event.remove('railcraft:wooden_tie_bottle')
    event.remove('railcraft:wooden_tie')
    event.shaped(
        'railcraft:wooden_tie',
        [
            '   ',
            'SSS',
            '   ',
        ],
        {
            S: '#forge:rods/treated_wood'
        }
    )
})