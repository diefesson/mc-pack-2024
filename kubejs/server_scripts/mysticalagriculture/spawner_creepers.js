ServerEvents.recipes(event => {
    const spawnerRecipe = global.mysticalagriculture.spawnerRecipe

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
