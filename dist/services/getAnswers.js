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
exports.getAnswers = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const getAnswers = () => __awaiter(void 0, void 0, void 0, function* () {
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
    return yield inquirer_1.default.prompt(questions);
});
exports.getAnswers = getAnswers;
//# sourceMappingURL=getAnswers.js.map