import {promises} from 'fs';

export const readInput = async (file: string) => {
  return await promises.readFile(file).then((res) => String(res));
};
