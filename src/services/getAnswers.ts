import inquirer from 'inquirer';

export const getAnswers = async () => {
    const questions = [];
    questions.push({
      type: 'checkbox',
      name: 'protocol',
      message: 'Please choose this protocols',
      choices: [
        'Action protocol with HTTP',
        'Action protocol with gRPC',
      ],
    });
    questions.push({
      type: 'checkbox',
      name: 'database',
      message: 'Please choose this databases',
      choices: [
        'Mongo DB',
        'Redis',
      ],
    });
    return await inquirer.prompt(questions);
}