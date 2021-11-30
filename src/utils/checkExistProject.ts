import chalk from 'chalk';
import fs from 'fs';

export const checkExistProject = (dir: string) => {
    if (fs.existsSync(dir)) {
        console.error('%s Process aborted, directory already exist.', chalk.red.bold('ERROR'));
        process.exit(1);
    }  
  }
  