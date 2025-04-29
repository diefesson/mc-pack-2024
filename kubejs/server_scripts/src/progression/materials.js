ServerEvents.recipes(event => {
    // Pneumaticcraft requires Thermal Cured Rubber
    event.replaceInput(
        'pneumaticcraft:pressure_tube',
        '#c:glass_blocks',
        'thermal:cured_rubber',
    )

    // Steel requires Pneumaticcraft Compressed Iron
    let ingotBlasting = event.findRecipes('immersiveengineering:blastfurnace/steel')[0]
    let ingotBlastingJson = JSON.parse(ingotBlasting.json)
    let blockBlasting = event.findRecipes('immersiveengineering:blastfurnace/steel_block')[0]
    let blockBlastingJson = JSON.parse(blockBlasting.json)
    let ingotArc = event.findRecipes('immersiveengineering:arcfurnace/steel')[0]
    let ingotArcJson = JSON.parse(ingotArc.json)
    ingotBlastingJson.input = { tag: 'forge:ingots/compressed_iron' }
    blockBlastingJson.input = { tag: 'forge:storage_blocks/compressed_iron' }
    ingotArcJson.input = { tag: 'forge:ingots/compressed_iron' }
    event.custom(ingotBlastingJson)
    event.custom(blockBlastingJson)
    event.custom(ingotArcJson)
    event.remove('immersiveengineering:blastfurnace/steel')
    event.remove('immersiveengineering:blastfurnace/steel_block')
    event.remove('immersiveengineering:arcfurnace/steel')

    // Thermal machines require Printed Circuits and Steel
    event.replaceInput(
        'thermal:machine_frame',
        '#forge:ingots/iron',
        '#forge:ingots/steel'
    )
    event.replaceInput(
        'thermal:machine_frame',
        '#forge:gears/tin',
        'pneumaticcraft:printed_circuit_board'
    )

})
