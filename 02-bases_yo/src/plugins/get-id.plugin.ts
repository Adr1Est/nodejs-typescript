// Renombra v4 a uuidv4
import {v4 as uuidv4} from 'uuid'

export const getID = () => {
  return uuidv4();
}

// PATRÓN ADAPTADOR