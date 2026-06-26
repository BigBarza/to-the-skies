 //Visit the wiki for more info - https:kubejs.com/


console.info("Jet fuel doesn't smelt steel beams")

StartupEvents.registry('fluid', event => {
  event.create('enriched_fuel_mixture', 'thin')
    .displayName('Enriched Fuel Mixture')
    .noBlock()
    .tint(0x331e04)

  event.create('jet_fuel', 'thin')
    .displayName('Jet Fuel')
    .noBlock()
    .tint(0x59CFDB60)

  event.create('enriched_jet_fuel', 'thin')
    .displayName('Enriched Jet Fuel')
    .noBlock()
    .tint(0xe08516)
    .type(type =>
        type.lightLevel(7)
    )
})