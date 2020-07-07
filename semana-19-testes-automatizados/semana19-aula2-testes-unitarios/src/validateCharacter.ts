import {Character} from './Character'

export const validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
          input.life === undefined || 
          // não pode colocar !input.life porque a vida pode ser 0! 
          // o mesmo vale para strength e defense
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life < 0 || input.strength < 0 || input.defense < 0) {
      return false;
    }
  
    return true;
  };