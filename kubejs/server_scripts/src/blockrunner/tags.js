ServerEvents.tags("block", event => {
    let pathBlocks = [
        'minecraft:dirt_path',
        'environmental:podzol_path',
        'environmental:mycelium_path',
        'environmental:dirt_path',
    ]

    for (let block of pathBlocks) {
        event.add('diefalpha:path_blocks', block)
    }
})