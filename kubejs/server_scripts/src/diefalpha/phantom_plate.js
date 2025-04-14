ServerEvents.recipes(event => {
    event.shaped(
        'diefalpha:phantom_plate',
        [
            ' M ',
            'MPM',
            ' M '
        ],
        {
            M: 'minecraft:phantom_membrane',
            P: '#forge:plates/aluminum'
        }
    )

})