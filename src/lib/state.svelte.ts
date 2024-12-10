import { browser } from '$app/environment';
import type { themes } from '../../tailwind.config';
import { getUserPreferredColorScheme } from './utils';

const STATE_KEY = 'cliparooDocState';

export type Theme = (typeof themes)[number];

type DocStateType = {
	theme: Theme;
};

class DocState {
	#state: DocStateType = $state(loadStateFromStorage());

	get theme() {
		return this.#state.theme;
	}

	set theme(value: Theme) {
		this.#state.theme = value;
		setTheme(value);
		this._saveState();
	}

	private _saveState = () => saveStateToStorage(this.#state);
}

const initialState: DocStateType = {
	theme: getUserPreferredColorScheme()
};

export const loadStateFromStorage = () => {
	const storedState = browser ? localStorage.getItem(STATE_KEY) : null;
	const state: DocStateType = storedState ? JSON.parse(storedState) : initialState;

	return state;
};

export const saveStateToStorage = (state: DocStateType) => {
	if (!browser) return;
	localStorage.setItem(STATE_KEY, JSON.stringify(state));
};

const setTheme = (theme: Theme) => {
	if (!browser) return;
	document.documentElement.setAttribute('data-theme', theme);
};

export const docState = new DocState();
