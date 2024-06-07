import storage from '../utils/storage';
import { PersistanceKeys } from '../utils/storage';
import { Observers } from '../types/store';

export let emptyState = {
	screen: 'SignIn',
	post: [],
};

export let appState = storage.get({key:PersistanceKeys.STORE, defaultValue: emptyState});

let observers: Observers[] = [];

const persistStore = (state: any) => storage.set({key:PersistanceKeys.STORE, value: state, session: false})



const notifyObeservers = () => 	observers.forEach((o: any) => o.render());


//Obtener el estado almacenado localmente, o establecer un estado inicial si no hay ninguno
export let appState = JSON.parse(localStorage.getItem('appState') || JSON.stringify({ screen: 'SignIn' }));

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o: any) => o.render());
	// Almacena el estado actual en el almacenamiento local
	localStorage.setItem('appState', JSON.stringify(appState));


export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};
