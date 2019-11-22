
import {Machine}from 'xstate';
import layoutState from './layoutState';
const stateMachine = Machine({
    id:"machine",
    type: 'parallel',
    context: {
        ...layoutState.context,
        error:undefined
    },
    states: {
        layout: layoutState.states,
    }

});

export default stateMachine;