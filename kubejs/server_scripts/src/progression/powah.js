ServerEvents.recipes(event => {
    ThermalUtils.setup(event)

    // Thermal (Machine Stage) => Powah
    // Dielectric Paste is produced using dusts

    event.remove('powah:crafting/dielectric_paste')
    event.remove('powah:crafting/dielectric_paste_2')

    event.shapeless(
        '8x powah:dielectric_paste',
        [
            '#forge:dusts/obsidian',
            '#forge:dusts/lead',
            'minecraft:clay_ball'
        ]
    )

    // Powah basic machines requires Pneumaticcraft Plastic

    let powahRecipes = [
        'powah:crafting/wrench',
        'powah:crafting/dielectric_casing',
        'powah:crafting/energy_cell_starter',
        'powah:crafting/energy_cell_basic',
        'powah:crafting/energy_cell_basic_2',
        'powah:crafting/furnator_basic',
        'powah:crafting/magmator_basic',
        'powah:crafting/thermo_generator_basic',
        'powah:crafting/solar_panel_basic',
    ]

    for (let id of powahRecipes) {
        event.replaceInput(
            { id: id },
            '#forge:ingots/iron',
            'pneumaticcraft:plastic'
        )
    }
})