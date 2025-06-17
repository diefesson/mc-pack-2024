ServerEvents.recipes(event => {
    // Saddle
    event.shaped(
        'minecraft:saddle',
        [
            'LLL',
            'LIL',
            '   ',
        ],
        {
            L: '#forge:leather',
            I: '#forge:ingots/iron',
        },
    )

    // Armor
    let materials = [
        '#forge:ingots/iron',
        '#forge:ingots/gold',
        '#forge:gems/diamond'
    ]
    let armors = [
        'minecraft:iron_horse_armor',
        'minecraft:golden_horse_armor',
        'minecraft:diamond_horse_armor',
    ]

    for (let i = 0; i < materials.length; i++) {
        let material = materials[i]
        let armor = armors[i]
        event.shaped(
            armor,
            [
                'M M',
                'MMM',
                'M M',
            ],
            {
                M: material,
            },
        )
    }
})
