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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createService = void 0;
const getAnswers_1 = require("./getAnswers");
const git_1 = require("../utils/git");
const copyFile_1 = require("../utils/copyFile");
const npm_1 = require("../utils/npm");
const createService = (cliDirectory, projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield (0, getAnswers_1.getAnswers)();
    try {
        yield (0, copyFile_1.copyFile)(`${cliDirectory}/templates`, projectPath);
    }
    catch (err) {
        console.error('Error trying copy templates', err);
    }
    try {
        yield (0, git_1.initGit)(projectPath);
    }
    catch (err) {
        console.error('Error trying init git', err);
    }
    // install package
    try {
        yield (0, npm_1.installPackages)(answers, projectPath);
    }
    catch (err) {
        console.error('Error trying install pacackers', err);
    }
    // https://www.npmjs.com/package/listr
    // https://www.twilio.com/blog/how-to-build-a-cli-with-node-js
});
exports.createService = createService;
//# sourceMappingURL=createService.js.map