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
exports.copyFile = void 0;
const fs = require('fs');
const ncp_1 = __importDefault(require("ncp"));
const util_1 = require("util");
const copy = (0, util_1.promisify)(ncp_1.default);
function copyFile(dirSource, dirDestiny) {
    return __awaiter(this, void 0, void 0, function* () {
        return copy(dirSource, dirDestiny, {
            clobber: false,
        });
    });
}
exports.copyFile = copyFile;
/*
export const loadFile = (filepath: string): string => {
  console.info(`Loading template ${filepath}...`);
  let content = '';
  try {
    content = fs.readFileSync(filepath, 'utf8');
  } catch (error) {
    throw 'File not found!';
  }
  return content;
};

export const saveFile = (filepath: string, content: string): boolean => {
  console.info(`Save file ${filepath}...`);
  try {
    fs.writeFileSync(filepath, content, 'utf8');
    return true
  } catch (error) {
    throw 'Error trying save file!';
  }
};

export const createDirectory = (directory: string): boolean => {
  console.info(`Creating directory ${directory}...`);
  if (!fs.existsSync(directory)){
    console.info(`Created ${directory}...`);
    try {
      fs.mkdirSync(directory);
    } catch (err) {
      throw 'Error trying create directory!';
    }
    return true
  }
  return false
}
*/
//# sourceMappingURL=copyFile.js.map