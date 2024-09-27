ServerEvents.recipes(event => {
    console.warn('here')
    const pulverizerRecipe = global['pulverizerRecipe']
    const smelterRecipe = global['smelterRecipe']

    event.remove({ id: 'silentgear:bronze_ingot' })
    event.remove({ id: 'silentgear:blaze_gold_ingot' })
    event.remove({ id: 'silentgear:crimson_steel_ingot' })
    event.remove({ id: 'silentgear:azure_electrum_ingot' })

    pulverizerRecipe(event, [Item.of('silentgear:blaze_gold_dust')], Item.of('silentgear:blaze_gold_ingot'))
    pulverizerRecipe(event, [Item.of('silentgear:azure_silver_dust')], Item.of('silentgear:azure_silver_ingot'))

    smelterRecipe(
        event,
        [
            Item.of('silentgear:blaze_gold_ingot')
        ],
        [
            Item.of('minecraft:gold_ingot', 1),
            Item.of('minecraft:blaze_powder', 4)
        ]
    )
    smelterRecipe(
        event,
        [
            Item.of('silentgear:crimson_steel_ingot', 1)
        ],
        [
            Item.of('silentgear:crimson_iron_ingot', 4),
            Item.of('minecraft:blaze_rod', 2),
            Item.of('minecraft:magma_cream', 1)
        ]
    )
    smelterRecipe(
        event,
        [
            Item.of('silentgear:azure_electrum_ingot', 1)
        ],
        [
            Item.of('silentgear:azure_silver_ingot', 4),
            Item.of('minecraft:gold_ingot', 2),
            Item.of('minecraft:ender_pearl', 1)
        ]
    )
})
