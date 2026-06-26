ServerEvents.loaded(event => {
  // Prevent duplicate registrations on script reloads.
  ThrusterFuelManager.clearScriptedFuels()

  ThrusterFuelManager.registerScriptedFuel('kubejs:jet_fuel', {
    thrustMultiplier: 1.0,
    consumptionMultiplier: 1.0,
    particle: 'plume'
  })

  ThrusterFuelManager.registerScriptedFuel('kubejs:enriched_jet_fuel', {
    thrustMultiplier: 1.35,
    consumptionMultiplier: 0.85,
    particle: 'plasma',
    //"override_color": 11993301
  })

  ThrusterFuelManager.registerScriptedFuel('kubejs:enriched_fuel_mixture', {
    thrustMultiplier: 0.55,
    consumptionMultiplier: 0.75,
    particle: 'plume'
  })

  ThrusterFuelManager.registerScriptedFuel('createdieselgenerators:biodiesel', {
    thrustMultiplier: 0.1,
    consumptionMultiplier: 0.2,
    particle: 'plume'
  })

  ThrusterFuelManager.registerScriptedFuel('createdieselgenerators:diesel', {
    thrustMultiplier: 0.2,
    consumptionMultiplier: 0.25,
    particle: 'plume'
  })

  ThrusterFuelManager.registerScriptedFuel('createdieselgenerators:gasoline', {
    thrustMultiplier: 0.85,
    consumptionMultiplier: 1.35,
    particle: 'plume'
  })

  ThrusterFuelManager.registerScriptedFuel('createaddition:bioethanol', {
    thrustMultiplier: 0.85,
    consumptionMultiplier: 1,
    particle: 'plume'
  })

  // Remove a fuel entirely.
  ThrusterFuelManager.removeFuel('minecraft:water')
  ThrusterFuelManager.removeFuel('createdieselgenerators:ethanol')
  ThrusterFuelManager.removeFuel('createdieselgenerators:plant_oil')
  ThrusterFuelManager.removeFuel('createpropulsion:turpentine')
})