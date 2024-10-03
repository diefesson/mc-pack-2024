ServerEvents.recipes(event => {
    const essences = [
        'mysticalagriculture:inferium_essence',
        'mysticalagriculture:prudentium_essence',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:imperium_essence',
        'mysticalagriculture:supremium_essence',
        'mysticalagradditions:insanium_essence',
    ]
    for (let i = 0; i < essences.length - 1; i++) {
        let from = essences[i]
        let to = essences[i + 1]
        event.remove({ id: `${to}` })
        event.remove({ id: `${to}_uncraft` })
        event.shaped(
            Item.of(to, 1),
            [
                'EEE',
                'ECE',
                'EEE'
            ],
            {
                E: from,
                C: '#mysticalagriculture:infusion_crystals'
            }
        )
        event.shapeless(
            Item.of(from, 8),
            [
                to
            ]
        )
    }
})
