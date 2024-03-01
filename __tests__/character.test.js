import { experiments } from "webpack";
import { createCharacter, assignAttributes } from "../src/js/character.js";

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
    const setAttributes = assignAttributes("intelligence")(8);
    const result = setAttributes(createdCharacter);
    expect(result).toEqual({ "type": "mechanic", "intelligence": 8 });
  });

  test('Should be able to add different attributes to different characters.', () => {
    const mechanic = createCharacter('mechanic');
    const enforcer = createCharacter('enforcer');
    const sergeant = createCharacter('sergeant');
    const president = createCharacter('president');

    const setAttributesMechanic = assignAttributes('endurance')(7);
    const setAttributesEnforcer = assignAttributes('melee')(9);
    const setAttributesSergeant = assignAttributes('strength')(8);
    const setAttributesPresident = assignAttributes('charisma')(9);

    const mechanicResult = setAttributesMechanic(mechanic);
    const enforcerResult = setAttributesEnforcer(enforcer);
    const sergeantResult = setAttributesSergeant(sergeant);
    const presidentResult = setAttributesPresident(president);

    expect(mechanicResult).toEqual({ "type": "mechanic", "endurance": 7 });
    expect(enforcerResult).toEqual({ "type": "enforcer", "melee": 9 });
    expect(sergeantResult).toEqual({ "type": "sergeant","strength": 8 });
    expect(presidentResult).toEqual({ "type": "president","charisma": 9 });
  });
});