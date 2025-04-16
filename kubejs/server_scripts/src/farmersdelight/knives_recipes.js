ServerEvents.recipes(event => {
    const entries = [
        { knife: 'farmersdelight:flint_knife', material: 'minecraft:flint' },
        { knife: 'farmersdelight:iron_knife', material: '#forge:ingots/iron' },
        { knife: 'farmersdelight:diamond_knife', material: '#forge:gems/diamond' },
        { knife: 'farmersdelight:netherite_knife', material: '#forge:ingots/netherite' },
        { knife: 'farmersdelight:golden_knife', material: '#forge:ingots/gold' },
        { knife: 'abnormals_delight:necromium_knife', material: '#forge:ingots/necromium' },
        { knife: 'abnormals_delight:silver_knife', material: '#forge:ingots/silver' },
        { knife: 'wizards_reborn:arcane_gold_knife', material: '#forge:ingots/arcane_gold' },
        { knife: 'wizards_reborn:arcane_wood_knife', material: 'wizards_reborn:arcane_wood_planks' },
    ]
    for (let e of entries) {
        event.remove({ output: e.knife })
        event.shaped(
            e.knife,
            [
                ' M',
                'S ',
            ],
            {
                M: e.material,
                S: 'minecraft:stick'
            }
        )
    }
})