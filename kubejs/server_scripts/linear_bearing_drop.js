// pickaxe logic
BlockEvents.broken(event => {
    if (event.block.id === 'linearbearing:linear_moving') {
        let pos = event.block.pos

        event.server.runCommandSilent(`summon item ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} {Item:{id:"kubejs:linear_bearing_item",Count:1b}}`)
    }
})


// wrench logic
BlockEvents.rightClicked(event => {
    if (event.hand !== 'main_hand') return

        let holdingWrench = event.item.id === 'create:wrench'

        if (holdingWrench && event.player.isCrouching()) {
            if (event.block.id === 'linearbearing:linear_moving') {
                let pos = event.block.pos

                // delete block
                event.block.set('minecraft:air')

                // give the player the item
                event.player.give('kubejs:linear_bearing_item')

                // trigger the wrench swing animation
                event.player.swing()
                event.cancel()
            }
        }
})
