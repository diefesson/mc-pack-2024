ServerEvents.recipes(event => {
    ThermalUtils.setup(event)

    // Thermal (Machine Stage) => Powah
    // Dielectric Paste is produced on Induction Smelter

    event.remove('powah:crafting/dielectric_paste')
    event.remove('powah:crafting/dielectric_paste_2')

    ThermalUtils.smelter_alloy(
        Item.of('powah:dielectric_paste', 4),
        [
            { item: 'minecraft:amethyst', count: 2 },
            { item: 'minecraft:clay_ball', count: 1 },
            { item: 'minecraft:quartz', count: 2 }
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