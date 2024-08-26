ServerEvents.recipes(event => {
    const pulverizerRecipe = global['pulverizerRecipe']

    pulverizerRecipe(event, [Item.of('rftoolsbase:dimensionalshard', 4)], Item.of('rftoolsdim:dimensional_blank_block'))
    pulverizerRecipe(event, [Item.of('rftoolsbase:dimensionalshard', 3)], Item.of('rftoolsdim:dimensional_block'))
    pulverizerRecipe(event, [Item.of('rftoolsbase:dimensionalshard', 3)], Item.of('rftoolsdim:dimensional_small_blocks'))
    pulverizerRecipe(event, [Item.of('rftoolsbase:dimensionalshard', 2)], Item.of('rftoolsdim:dimensional_cross_block'))
    pulverizerRecipe(event, [Item.of('rftoolsbase:dimensionalshard', 2)], Item.of('rftoolsdim:dimensional_cross2_block'))
    pulverizerRecipe(event, [Item.of('rftoolsbase:dimensionalshard', 2)], Item.of('rftoolsdim:dimensional_pattern1_block'))
    pulverizerRecipe(event, [Item.of('rftoolsbase:dimensionalshard', 2)], Item.of('rftoolsdim:dimensional_pattern2_block'))
})
