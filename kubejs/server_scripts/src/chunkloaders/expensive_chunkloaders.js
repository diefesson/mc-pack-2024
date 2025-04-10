ServerEvents.recipes(event => {
    // Basic Chunkloader
    event.replaceInput(
        'chunkloaders:basic_chunk_loader',
        '#forge:ingots/iron',
        '#forge:storage_blocks/iron',
    )

    // Advanced Chunkloader
    event.replaceInput(
        'chunkloaders:advanced_chunk_loader',
        '#forge:ingots/gold',
        '#forge:storage_blocks/gold',
    )

    // Ultimate Chunkloader
    event.replaceInput(
        'chunkloaders:ultimate_chunk_loader',
        '#forge:gems/diamond',
        '#forge:storage_blocks/diamond',
    )
    event.replaceInput(
        'chunkloaders:ultimate_chunk_loader',
        '#forge:dusts/redstone',
        '#forge:storage_blocks/redstone',
    )
})