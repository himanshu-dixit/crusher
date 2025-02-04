// eslint-disable-next-line unicorn/filename-case
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import { APP_DIRECTORY } from '../constants';
import { createDirIfNotExist } from '../utils/utils';
import { BlankMessage, Message } from './messages';

export function findCrusherProjectConfig(_start = null) {
	let start: any = _start || process.cwd();
	if (typeof start === 'string') {
		if (start[start.length - 1] !== path.sep) {
			start += path.sep;
		}
		start = path.normalize(start);
		start = start.split(path.sep);
	}
	if (!start.length) {
		return null;
	}
	start.pop();
	const dir = start.join(path.sep);
	const fullPath = path.join(dir, '.crusher');
	if (fs.existsSync(fullPath) && path.resolve(fullPath) !== path.resolve(APP_DIRECTORY)) {
		if (fs.lstatSync(fullPath).isDirectory()) {
			return path.normalize(fullPath);
		}
	}
	return findCrusherProjectConfig(start);
}

const PROJECT_CONFIG_PATH = path.resolve(process.cwd(), '.crusher');

export const setProjectConfig = (config) => {
	createDirIfNotExist('.crusher');
	fs.writeFileSync(path.resolve(PROJECT_CONFIG_PATH, './config.js'), `module.exports = ${JSON.stringify(config, null, 2)}`);
};

export const getSuggestedProjectConfigPath = () => {
	return path.resolve(PROJECT_CONFIG_PATH, './config.js');
};
export const getProjectConfigPath = () => {
	const existingProjectConfig = findCrusherProjectConfig();
	if (fs.existsSync(path.resolve(existingProjectConfig || PROJECT_CONFIG_PATH, './config.js'))) {
		return path.resolve(existingProjectConfig || PROJECT_CONFIG_PATH, './config.js');
	}
	const configPath = path.resolve(existingProjectConfig || PROJECT_CONFIG_PATH, './config.json');
	if (!fs.existsSync(configPath)) return null;

	return configPath;
};

let hasLoggedProjectConfig = false;
export const getProjectConfig = (verbose: boolean = true) => {
	const configPath = getProjectConfigPath();
	if (!fs.existsSync(configPath)) {
		if (!hasLoggedProjectConfig) {
			if (verbose) console.log(`Project config not found`);
			hasLoggedProjectConfig = true;
		}
		return null;
	}

	if (!hasLoggedProjectConfig) {
		hasLoggedProjectConfig = true;
		const relativePath = path.relative(process.cwd(), configPath);
		Message(chalk.bgCyan, ' config ', `${chalk.white(relativePath)}`);
		BlankMessage(`${chalk.gray('Using config')}\n`);
	}
	hasLoggedProjectConfig = true;
	if (configPath.endsWith('.js')) {
		const requireOriginal = eval('require');
		const config = requireOriginal(configPath);
		return config;
	}
	return JSON.parse(fs.readFileSync(configPath, 'utf8'));
};
