ServerEvents.recipes(event => {
    // Remove Elytra Trims unwanted recipes
    event.remove('elytratrims:glow')
    event.remove('elytratrims:animation')
    event.remove('elytratrims:patterns')
})
