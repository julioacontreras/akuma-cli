"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const arg_1 = __importDefault(require("arg"));
const chalk_1 = __importDefault(require("chalk"));
const createService_1 = require("./services/createService");
const checkExistProject_1 = require("./utils/checkExistProject");
const cli = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const cliDirectory = __dirname + '/..';
    const rawArgs = args;
    const options = parseArgumentsIntoOptions(rawArgs);
    const projectName = options.createProject;
    if (projectName) {
        const currentDirectory = process.cwd();
        const projectPath = `${currentDirectory}/${projectName}`;
        (0, checkExistProject_1.checkExistProject)(projectPath);
        yield (0, createService_1.createService)(cliDirectory, projectPath);
    }
    else {
        console.info(chalk_1.default.yellow('Please put options before run.'));
    }
});
exports.cli = cli;
function parseArgumentsIntoOptions(rawArgs) {
    const args = (0, arg_1.default)({
        '--create-project': String,
    }, {
        argv: rawArgs.slice(2),
    });
    return {
        createProject: args['--create-project'] || '',
    };
}
//# sourceMappingURL=cli.js.map