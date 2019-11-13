import {createStore} from 'redux';
import {appReducer,initialState} from './appReducer';
const appStore = createStore(appReducer,initialState);
export const appState = appStore.getState();
export default appStore ;