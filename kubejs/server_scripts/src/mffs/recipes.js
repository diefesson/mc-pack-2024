ServerEvents.recipes(event => {
    event.replaceInput(
        'mffs:battery',
        'minecraft:iron_ingot',
        '#forge:ingots/steel'
    )

    event.remove('mffs:steel_compound')
    event.remove('mffs:steel_ingot')
})