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

  test('Should be able to assign values for base attributes for a character.', () => {
    const createdCharacter = createCharacter("mechanic");
    const setAttributes = assignAttributes("intelligence")(8);
    const result = setAttributes(createdCharacter);
    expect(result).toEqual({ "type": "mechanic", "intelligence": 8 });
  });
});