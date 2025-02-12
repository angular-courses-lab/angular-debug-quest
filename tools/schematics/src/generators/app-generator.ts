import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { AppGeneratorGeneratorSchema } from './schema';
import {
  applicationGenerator,
  E2eTestRunner,
  UnitTestRunner,
} from '@nx/angular/generators';
import { Linter } from '@nx/eslint';

function generateRandomString(length: number = 8): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function appGeneratorGenerator(
  tree: Tree,
  options: AppGeneratorGeneratorSchema
) {
  await applicationGenerator(tree, {
    name: `${generateRandomString()}`,
    directory: 'apps',
    linter: Linter.EsLint,
    unitTestRunner: UnitTestRunner.Jest,
    e2eTestRunner: E2eTestRunner.Playwright,
    addTailwind: true,
    style: 'css',
  });
}

export default appGeneratorGenerator;
