const fs = require('fs');
import ncp from 'ncp';
import { promisify } from 'util';
import { Answer, AKUMA_HTTP, AKUMA_GRPC, AKUMA_MONGODB, AKUMA_REDIS } from '../types/answer'

const copy = promisify(ncp);

async function copyFile(dirSource: string, dirDestiny: string) {
  return copy(dirSource, dirDestiny, {
    clobber: false,
  });
}

export async function copyFiles(answers: Answer, dirSource: string, dirDestiny: string) {
  await copyFile(`${dirSource}/templates/adapters/metrics`, `${dirDestiny}/adapters/metrics`)
  await copyFile(`${dirSource}/templates/adapters/securityAccess`, `${dirDestiny}/adapters/securityAccess`)
  if (answers.protocol.includes(AKUMA_HTTP)) {
    await copyFile(`${dirSource}/templates/adapters/serverHTTP`, `${dirDestiny}/adapters/serverHTTP`)
  }
  if (answers.protocol.includes(AKUMA_GRPC)) {
    await copyFile(`${dirSource}/templates/adapters/serverGRPC`, `${dirDestiny}/adapters/serverGRPC`)
  }
  if (answers.protocol.includes(AKUMA_MONGODB)) {
    await copyFile(`${dirSource}/templates/adapters/dbMongo`, `${dirDestiny}/adapters/dbMongo`)
  }
  if (answers.protocol.includes(AKUMA_REDIS)) {
    // await copyFile('akuma-redis', targetDirectory)
  }
  if (answers.protocol.includes(AKUMA_MONGODB) || answers.protocol.includes(AKUMA_REDIS)) {
    await copyFile(`${dirSource}/templates/adapters/userRepository`, `${dirDestiny}/adapters/userRepository`)
    await copyFile(`${dirSource}/templates/adapters/validate`, `${dirDestiny}/adapters/validate`)
  }
}




/*
export const loadFile = (filepath: string): string => {
  console.info(`Loading template ${filepath}...`);
  let content = '';
  try {
    content = fs.readFileSync(filepath, 'utf8');
  } catch (error) {
    throw 'File not found!';
  }
  return content;
};

export const saveFile = (filepath: string, content: string): boolean => {
  console.info(`Save file ${filepath}...`);
  try {
    fs.writeFileSync(filepath, content, 'utf8');
    return true
  } catch (error) {
    throw 'Error trying save file!';
  }
};

export const createDirectory = (directory: string): boolean => { 
  console.info(`Creating directory ${directory}...`);
  if (!fs.existsSync(directory)){
    console.info(`Created ${directory}...`);
    try {
      fs.mkdirSync(directory);
    } catch (err) {
      throw 'Error trying create directory!';
    }
    return true
  }
  return false
}
*/
