import {getAnswers} from './getAnswers'
import {initGit} from '../utils/git'
import {copyFiles} from '../utils/copyFile'
import {installPackages} from '../utils/npm'
import {createApplication} from '../utils/createApplication'

export const createService = async (cliDirectory: string, projectPath: string) => {
  const answers = await getAnswers()
  try {
    await copyFiles(answers, cliDirectory, projectPath)
  } catch (err) {
    console.error('Error trying copy templates', err)
  }

  try {
    await initGit(projectPath)
  } catch (err) {
    console.error('Error trying init git', err)
  } 

  try {
    await installPackages(answers, projectPath)
  } catch (err) {
    console.error('Error trying install pacackers', err)
  }
  
  // render application
  createApplication(answers, cliDirectory, projectPath)
  // https://www.npmjs.com/package/listr
  // https://www.twilio.com/blog/how-to-build-a-cli-with-node-js
}
