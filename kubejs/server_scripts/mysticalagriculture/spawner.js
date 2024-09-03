ServerEvents.recipes(event => {
    const spawnerRecipe = global['spawnerRecipe']

    event.remove({ type: 'mysticalagriculture:soulium_spawner', input: { item: 'mysticalagriculture:skeleton_essence' } })
    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:skeleton_essence', 16),
        [
            { entity: 'minecraft:skeleton', weight: 1 },
            { entity: 'variantsandventures:murk', weight: 1 },
            { entity: 'variantsandventures:verdant', weight: 1 },
        ]
    )

    event.remove({ type: 'mysticalagriculture:soulium_spawner', input: { item: 'mysticalagriculture:zombie_essence' } })
    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:zombie_essence', 16),
        [
            { entity: 'minecraft:zombie', weight: 6 },
            { entity: 'minecraft:zombie_villager', weight: 1 },
            { entity: 'variantsandventures:gelid', weight: 6 },
            { entity: 'variantsandventures:thicket', weight: 6 },
        ]
    )

    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:emerald_essence', 64),
        [
            { entity: 'minecraft:villager', weight: 1 }
        ]
    )

    event.remove({ type: 'mysticalagriculture:soulium_spawner', input: { item: 'mysticalagriculture:enderman_essence' } })
    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:enderman_essence', 16),
        [
            { entity: 'minecraft:enderman', weight: 3 },
            { entity: 'bygonenether:warped_enderman', weight: 1 },
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

    event.remove({ type: 'mysticalagriculture:soulium_spawner', input: { item: 'mysticalagriculture:creeper_essence' } })
    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:creeper_essence', 24),
        [
            { entity: 'minecraft:creeper', weight: 3 },
            { entity: 'creeperoverhaul:jungle_creeper', weight: 1 },
            { entity: 'creeperoverhaul:bamboo_creeper', weight: 1 },
            { entity: 'creeperoverhaul:desert_creeper', weight: 1 },
            { entity: 'creeperoverhaul:badlands_creeper', weight: 1 },
            { entity: 'creeperoverhaul:hills_creeper', weight: 1 },
            { entity: 'creeperoverhaul:savannah_creeper', weight: 1 },
            { entity: 'creeperoverhaul:mushroom_creeper', weight: 1 },
            { entity: 'creeperoverhaul:dripstone_creeper', weight: 1 },
            { entity: 'creeperoverhaul:cave_creeper', weight: 1 },
            { entity: 'creeperoverhaul:dark_oak_creeper', weight: 1 },
            { entity: 'creeperoverhaul:spruce_creeper', weight: 1 },
            { entity: 'creeperoverhaul:beach_creeper', weight: 1 },
            { entity: 'creeperoverhaul:snowy_creeper', weight: 1 },
            { entity: 'creeperoverhaul:ocean_creeper', weight: 1 },
        ]
    )
})
