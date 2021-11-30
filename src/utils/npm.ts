import { Answer, AKUMA_HTTP, AKUMA_GRPC, AKUMA_MONGODB, AKUMA_REDIS } from '../types/answer'

const execa = require('execa')

const installPackage = async (packageName: string, targetDirectory: string) => {
   const result = await execa('npm', ['install', packageName], {
     cwd: targetDirectory,
   });
   if (result.failed) {
     return Promise.reject(new Error('Failed to install package'));
   }
   return;   
 }

 const initPackage = async (targetDirectory: string) => {
  const result = await execa('npm', ['init', '-y'], {
    cwd: targetDirectory,
  });
  if (result.failed) {
    return Promise.reject(new Error('Failed to initialize npm'));
  }
  return;   
}

export const installPackages = async (answers: Answer, targetDirectory: string) => {
  await initPackage(targetDirectory)
  await installPackage('akuma-microservice-framework', targetDirectory)
  await installPackage('akuma-metrics', targetDirectory)
  await installPackage('akuma-security-access', targetDirectory)
  if (answers.protocol.includes(AKUMA_HTTP)) {
    await installPackage('akuma-http', targetDirectory)
  }
  if (answers.protocol.includes(AKUMA_GRPC)) {
    await installPackage('action-grpc', targetDirectory)
    await installPackage('akuma-mf-grpc', targetDirectory)
  }
  if (answers.protocol.includes(AKUMA_MONGODB)) {
    await installPackage('akuma-validation', targetDirectory)
    await installPackage('akuma-mongodb', targetDirectory)
  }
  if (answers.protocol.includes(AKUMA_REDIS)) {
    // await installPackage('akuma-redis', targetDirectory)
  }
}
