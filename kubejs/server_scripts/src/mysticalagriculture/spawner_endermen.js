ServerEvents.recipes(event => {
    MAUtils.setup(event)

    MAUtils.spawnerRecipe(
        event,
        Item.of('mysticalagriculture:enderman_essence', 16),
        [
            { entity: 'minecraft:enderman', weight: 3 },
            { entity: 'endermanoverhaul:badlands_enderman', weight: 1 },
            { entity: 'endermanoverhaul:cave_enderman', weight: 1 },
            { entity: 'endermanoverhaul:crimson_enderman', weight: 1 },
            { entity: 'endermanoverhaul:dark_oak_enderman', weight: 1 },
            { entity: 'endermanoverhaul:desert_enderman', weight: 1 },
            { entity: 'endermanoverhaul:end_enderman', weight: 1 },
            { entity: 'endermanoverhaul:ice_spikes_enderman', weight: 1 },
            { entity: 'endermanoverhaul:mushroom_fields_enderman', weight: 1 },
            { entity: 'endermanoverhaul:nether_wastes_enderman', weight: 1 },
            { entity: 'endermanoverhaul:coral_enderman', weight: 1 },
            { entity: 'endermanoverhaul:savanna_enderman', weight: 1 },
            { entity: 'endermanoverhaul:snowy_enderman', weight: 1 },
            { entity: 'endermanoverhaul:soulsand_valley_enderman', weight: 1 },
            { entity: 'endermanoverhaul:swamp_enderman', weight: 1 },
            { entity: 'endermanoverhaul:warped_forest_enderman', weight: 1 },
            { entity: 'endermanoverhaul:windswept_hills_enderman', weight: 1 },
        ]
    )
})
