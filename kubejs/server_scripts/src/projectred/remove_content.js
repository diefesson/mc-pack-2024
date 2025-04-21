let projectedRedEntries = [
    // Materials
    'projectred_core:peridot',
    'projectred_core:electrotine_dust',
    'projectred_core:red_iron_comp',
    'projectred_core:electrotine_iron_comp',
    'projectred_core:electrotine_ingot',
    'projectred_core:sand_coal_comp',
    'projectred_core:boule',
    'projectred_core:silicon',
    'projectred_core:red_silicon_comp',
    'projectred_core:glow_silicon_comp',
    'projectred_core:electrotine_silicon_comp',
    'projectred_core:electrotine_silicon',

    // Machine Parts
    'projectred_core:copper_coil',
    'projectred_core:iron_coil',
    'projectred_core:gold_coil',
    'projectred_core:motor',
    'projectred_core:woven_cloth',
    'projectred_core:sail',
    'projectred_core:draw_plate',

    // Machines
    'projectred_core:electrotine_generator',

    // Cables
    'projectred_transmission:low_load_power_wire',
    'projectred_transmission:low_load_framed_power_wire',
]

ServerEvents.recipes(event => {
    for (let entry of projectedRedEntries) {
        event.remove(entry)
    }
})

ServerEvents.tags('item', event => {
    for (let entry of projectedRedEntries) {
        event.add('c:hidden_from_recipe_viewers', entry)
    }
})
