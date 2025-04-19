ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:bell',
        [
            'GGS',
            ' IG',
            'E G',
        ],
        {
            G: '#forge:ingots/gold',
            S: '#forge:rods/wooden',
            I: '#forge:ingots/iron',
            E: '#forge:gems/emerald',
        },
    )
})