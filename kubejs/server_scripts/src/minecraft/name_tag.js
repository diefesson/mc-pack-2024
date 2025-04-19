ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:name_tag',
        [
            '  I',
            ' P ',
            'E  ',
        ],
        {
            I: '#forge:ingots/iron',
            P: '#minecraft:planks',
            E: '#forge:gems/emerald',
        },
    )
})