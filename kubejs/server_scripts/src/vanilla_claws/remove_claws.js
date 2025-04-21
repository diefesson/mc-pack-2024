ServerEvents.tags('item', event => {
    let vanillaClawsEntries = [
        "vanilla_claws:zircon_claws",
        "vanilla_claws:tanzanite_claws",
        "vanilla_claws:emerald_claws",
        "vanilla_claws:citrine_claws",
        "vanilla_claws:black_opal_claws",
        "vanilla_claws:soapy_claws",
        "vanilla_claws:gobber2_claws",
        "vanilla_claws:gobber2_nether_claws",
        "vanilla_claws:gobber2_end_claws",
    ]

    for (let entry of vanillaClawsEntries) {
        event.add('c:hidden_from_recipe_viewers', entry)
    }
})