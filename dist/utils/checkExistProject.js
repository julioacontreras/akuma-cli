"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistProject = void 0;
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const checkExistProject = (dir) => {
    if (fs_1.default.existsSync(dir)) {
        console.error('%s Process aborted, directory already exist.', chalk_1.default.red.bold('ERROR'));
        process.exit(1);
    }
};
exports.checkExistProject = checkExistProject;
//# sourceMappingURL=checkExistProject.js.map