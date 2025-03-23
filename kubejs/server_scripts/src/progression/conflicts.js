ServerEvents.recipes(event => {
    // Prefer Thermal gear recipes
    event.remove('railcraft:nickel_gear')
    event.remove('railcraft:gold_gear')
    event.remove('railcraft:invar_gear')
    event.remove('railcraft:iron_gear')
    event.remove('railcraft:steel_gear')
    event.remove('railcraft:copper_gear')
    event.remove('railcraft:lead_gear')
    event.remove('railcraft:tin_gear')
    event.remove('railcraft:bronze_gear')
    event.remove('railcraft:silver_gear')
})