import { validateCharacter } from '../src/validateCharacter'


//a)
test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
});


 //b

    test("Should return false for empty life", () => {
        const result = validateCharacter({
          name: "",
          life: "",
          strength: 300,
          defense: 500,
        });
        expect(result).toBe(false);
    });

//c

        test("Should return false for empty strength", () => {
            const result = validateCharacter({
              name: "",
              life: 1500,
              strength: 300,
              defense: 500,
            });
            expect(result).toBe(false);
        });

        //d

        test("Should return false for empty defense", () => {
            const result = validateCharacter({
              name: "",
              life: 1500,
              strength: 300,
              defense: "",
            });
            expect(result).toBe(false);
        });

        
        
    

  test("Should return true for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });