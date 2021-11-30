import arg from 'arg';
import chalk from 'chalk';
import {createService} from './services/createService';
import {checkExistProject} from './utils/checkExistProject'

export const cli = async (args: unknown) => {
  const cliDirectory = __dirname + '/..'
  const rawArgs = args as Array<string>  
  const options = parseArgumentsIntoOptions(rawArgs);
  const projectName = options.createProject

  if (projectName) {
    const currentDirectory = process.cwd()
    const projectPath = `${currentDirectory}/${projectName}`
    checkExistProject(projectPath)
    await createService(cliDirectory, projectPath)
  } else {
    console.info(chalk.yellow('Please put options before run.'));
  }
}

function parseArgumentsIntoOptions(rawArgs: Array<string>) {
  const args = arg(
    {
      '--create-project': String,
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    createProject: args['--create-project'] || '',
  };
 }