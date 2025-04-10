ServerEvents.recipes(event => {
    // Let's balance Tinker Hammer plate hammering
    let materials = [
        ['dawnstone', `embers:dawnstone_plate`],
        ['iron', AlmostUnified.getPreferredItemForTag('forge:plates/iron')],
        ['copper', AlmostUnified.getPreferredItemForTag('forge:plates/copper')],
        ['lead', AlmostUnified.getPreferredItemForTag('forge:plates/lead')],
        ['silver', AlmostUnified.getPreferredItemForTag('forge:plates/silver')],
    ]

    for (let [material, plate] of materials) {
        let ingot = `#forge:ingots/${material}`
        event.remove(`embers:${material}_plate_hammering`)
        event.shapeless(
            plate,
            [
                ingot,
                'embers:tinker_hammer',
            ]
        )
    }
})
