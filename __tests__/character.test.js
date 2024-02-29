import { createCharacter } from "../src/js/character.js";

describe('RPG game character creation tests', () => {

  test('Should contain a function that can create objects for different characters.', () => {
    const createdCharacter1 = createCharacter();
    const createdCharacter2 = createCharacter();
    const createdCharacter3 = createCharacter();
    expect(createdCharacter1).toEqual({});
    expect(createdCharacter2).toEqual({});
    expect(createdCharacter3).toEqual({});
  });
});