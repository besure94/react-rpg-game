import { createCharacter, setAttributes, storeAttributes } from "../src/js/character.js";

describe('RPG game character creation tests', () => {

  test('Should contain a function that can create objects for different characters.', () => {
    const createdCharacter1 = createCharacter("sniper");
    const createdCharacter2 = createCharacter("mechanic");
    const createdCharacter3 = createCharacter("scout");
    expect(createdCharacter1.type).toEqual("sniper");
    expect(createdCharacter2.type).toEqual("mechanic");
    expect(createdCharacter3.type).toEqual("scout");
  });

  test('Should be able to assign a value for a base attribute for a character.', () => {
    const createdCharacter = createCharacter("mechanic");
    const attributesSet = setAttributes("intelligence")(8);
    const result = attributesSet(createdCharacter);
    expect(result).toEqual({ "type": "mechanic", "level": 1, "intelligence": 8 });
  });

  test('Should be able to add different attributes to different characters.', () => {
    const mechanic = createCharacter('mechanic');
    const enforcer = createCharacter('enforcer');
    const sergeant = createCharacter('sergeant');
    const president = createCharacter('president');

    const setAttributesMechanic = setAttributes('endurance')(7);
    const setAttributesEnforcer = setAttributes('melee')(9);
    const setAttributesSergeant = setAttributes('strength')(8);
    const setAttributesPresident = setAttributes('charisma')(9);

    const mechanicResult = setAttributesMechanic(mechanic);
    const enforcerResult = setAttributesEnforcer(enforcer);
    const sergeantResult = setAttributesSergeant(sergeant);
    const presidentResult = setAttributesPresident(president);

    expect(mechanicResult).toEqual({ "type": "mechanic", "level": 1, "endurance": 7 });
    expect(enforcerResult).toEqual({ "type": "enforcer", "level": 1, "melee": 9 });
    expect(sergeantResult).toEqual({ "type": "sergeant", "level": 1,"strength": 8 });
    expect(presidentResult).toEqual({ "type": "president", "level": 1, "charisma": 9 });
  });

  test('Each character should have a property that shows their level, which will be 1 to start.', () => {
    const mechanic = createCharacter('mechanic');
    const level = mechanic.level;
    expect(level).toEqual(1);
  });

  test('Should have a method that can update the new state of a modified character.', () => {
    const characterState = storeAttributes();

    const increaseStrength = setAttributes('melee')(3);
    const decreaseStrength = setAttributes('melee')(-1);

    const strengthenedCharacter = characterState(increaseStrength);
    const weakenedCharacter = characterState(decreaseStrength);

    expect(strengthenedCharacter).toEqual({ "melee": 3 });
    expect(weakenedCharacter).toEqual({ "melee": 2 });
  });
});