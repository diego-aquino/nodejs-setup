import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
};
