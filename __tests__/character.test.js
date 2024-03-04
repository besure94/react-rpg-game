import { createCharacter, enhanceAttributes, setAttributes, storeAttributes } from "../src/js/character.js";

describe('RPG game character creation tests', () => {

  test('Should contain a function that creates another function which returns an object.', () => {
    const createdCharacter1 = createCharacter('enforcer');
    const createdCharacter2 = createCharacter('sergeant');
    const createdCharacter3 = createCharacter('president');

    const newCharacter1 = createdCharacter1('enforcer');
    const newCharacter2 = createdCharacter2('sergeant');
    const newCharacter3 = createdCharacter3('president');

    expect(newCharacter1).toEqual({ type: 'enforcer', level: 1, health: 100, items: [] });
    expect(newCharacter2).toEqual({ type: 'sergeant', level: 1, health: 100, items: [] });
    expect(newCharacter3).toEqual({ type: 'president', level: 1, health: 100, items: [] });
  });

  test('Should be able to assign a value for a base attribute for a character.', () => {
    const createACharacter = createCharacter('mechanic')
    const newCharacter = createACharacter(createACharacter);
    const attributesSet = setAttributes("intelligence")(8);
    const result = attributesSet(newCharacter);
    expect(result).toEqual({ type: "mechanic", level: 1, health: 100, items: [], intelligence: 8 });
  });

  test('Should be able to add different attributes to different characters.', () => {
    const createMechanic = createCharacter('mechanic');
    const createEnforcer = createCharacter('enforcer');
    const createSergeant = createCharacter('sergeant');
    const createPresident = createCharacter('president');

    const mechanic = createMechanic(createMechanic);
    const enforcer = createEnforcer(createEnforcer);
    const sergeant = createSergeant(createSergeant);
    const president = createPresident(createPresident);

    const setAttributesMechanic = setAttributes('endurance')(7);
    const setAttributesEnforcer = setAttributes('melee')(9);
    const setAttributesSergeant = setAttributes('strength')(8);
    const setAttributesPresident = setAttributes('charisma')(9);

    const mechanicResult = setAttributesMechanic(mechanic);
    const enforcerResult = setAttributesEnforcer(enforcer);
    const sergeantResult = setAttributesSergeant(sergeant);
    const presidentResult = setAttributesPresident(president);

    expect(mechanicResult).toEqual({ "type": "mechanic", "level": 1, "health": 100, items: [], "endurance": 7 });
    expect(enforcerResult).toEqual({ "type": "enforcer", "level": 1, "health": 100, items: [], "melee": 9 });
    expect(sergeantResult).toEqual({ "type": "sergeant", "level": 1, "health": 100, items: [], "strength": 8 });
    expect(presidentResult).toEqual({ "type": "president", "level": 1, "health": 100, items: [], "charisma": 9 });
  });

  test('Should have a method that can update and store the new state of a modified character.', () => {
    const characterState = storeAttributes();
    const increaseStrength = setAttributes('melee')(3);
    const decreaseStrength = setAttributes('melee')(-1);
    const strengthenedCharacter = characterState(increaseStrength);
    const weakenedCharacter = characterState(decreaseStrength);

    expect(strengthenedCharacter).toEqual({ "melee": 3 });
    expect(weakenedCharacter).toEqual({ "melee": 2 });
  });

  test('Should contain a function that can allow a character to level up once their attribute hits a certain value.', () => {
    const characterState = storeAttributes();
    const createEnforcer = createCharacter('enforcer');
    const setMelee = setAttributes('melee')(10);
    const enforcerState = characterState(createEnforcer);
    const setMeleeState = characterState(setMelee);
    const boostMelee = setAttributes('melee')(10);
    const boostedState = characterState(boostMelee);
    expect(enforcerState).toEqual({ type: 'enforcer', level: 1, health: 100, items: [] });
    expect(setMeleeState).toEqual({ type: 'enforcer', level: 1, health: 100, items: [], melee: 10 });
    expect(boostedState).toEqual({ type: 'enforcer', level: 2, health: 105, items: [], melee: 21 });
  });

  test('Should contain a function that enhances a characters abilities when they gain certain items.', () => {
    const characterState = storeAttributes();
    const createEnforcer = createCharacter('enforcer');
    characterState(createEnforcer);
    const setMelee = setAttributes('melee')(10);
    characterState(setMelee);
    const spikedBat = enhanceAttributes('Spiked bat', 'melee', 5);
    const newStateWithItem = characterState(spikedBat);

    expect(newStateWithItem).toEqual({ type: 'enforcer', level: 1, health: 100, items: ['Spiked bat'], melee: 15 });
  });
});