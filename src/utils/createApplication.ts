import { Answer, AKUMA_HTTP, AKUMA_GRPC, AKUMA_MONGODB, AKUMA_REDIS } from '../types/answer'

export const createApplication = (answers: Answer, dirSource: string, dirDestiny: string) => {
if (answers.protocol.includes(AKUMA_HTTP)) {
    // await copyFile(`${dirSource}/templates/adapters/serverHTTP`, `${dirDestiny}/adapters/serverHTTP`)
  }
  if (answers.protocol.includes(AKUMA_GRPC)) {
    // await copyFile(`${dirSource}/templates/adapters/serverGRPC`, `${dirDestiny}/adapters/serverGRPC`)
  }
  if (answers.protocol.includes(AKUMA_MONGODB)) {
    // await copyFile(`${dirSource}/templates/adapters/dbMongo`, `${dirDestiny}/adapters/dbMongo`)
  }
  if (answers.protocol.includes(AKUMA_REDIS)) {
    // await copyFile('akuma-redis', targetDirectory)
  }
  if (answers.protocol.includes(AKUMA_MONGODB) || answers.protocol.includes(AKUMA_REDIS)) {
    // await copyFile(`${dirSource}/templates/adapters/userRepository`, `${dirDestiny}/adapters/userRepository`)
    // await copyFile(`${dirSource}/templates/adapters/validate`, `${dirDestiny}/adapters/validate`)
  }   
}