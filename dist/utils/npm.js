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
exports.installPackages = void 0;
const execa = require('execa');
const installPackage = (packageName, targetDirectory) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield execa('npm', ['install', packageName], {
        cwd: targetDirectory,
    });
    if (result.failed) {
        return Promise.reject(new Error('Failed to install package'));
    }
    return;
});
const initPackage = (targetDirectory) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield execa('npm', ['init', '-y'], {
        cwd: targetDirectory,
    });
    if (result.failed) {
        return Promise.reject(new Error('Failed to initialize npm'));
    }
    return;
});
const installPackages = (answers, targetDirectory) => __awaiter(void 0, void 0, void 0, function* () {
    yield initPackage(targetDirectory);
    if (answers.protocol.includes('Action protocol with HTTP')) {
        yield installPackage('akuma', targetDirectory);
    }
});
exports.installPackages = installPackages;
//# sourceMappingURL=npm.js.map