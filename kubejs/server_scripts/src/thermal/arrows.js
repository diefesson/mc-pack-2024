ServerEvents.recipes(event => {
    event.replaceInput(
        { output: { item: "archers_paradox:frost_arrow" } },
        { item: "minecraft:packed_ice" },
        { item: "thermal:blizz_powder" }
    )

    event.replaceInput(
        { output: { item: "archers_paradox:lightning_arrow" } },
        { item: "minecraft:lightning_rod" },
        { item: "thermal:blitz_powder" }
    )
})
