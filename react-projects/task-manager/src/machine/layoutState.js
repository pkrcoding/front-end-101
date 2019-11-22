import {assign}from 'xstate';
import apiConfig from '../config';

const layoutState = {
    id:'layout',
    context: {
        layout_url: undefined,
        layout_recipieList: [],
        layout_selectedRecipie: [],
        layout_jobList:[],
        layout_selected_job:undefined,
        layout_taskList:[],
        layout_showAddJobModal: false,
    },
    states: {
        initial: 'loading',
        states:{
            loading:{
                invoke: {
                    src: (context, event) => fetch(apiConfig.url + "recipies").then(res => res.json()),
                    onDone: {
                        target: 'recipieLoaded',
                        actions: assign({ layout_recipieList: (context, event) => event.data })
                    },
                    onError: {
                        target: 'failure',
                        actions: assign({ error: (context, event) => event.data })
                    }
                },
            },
            recipieLoaded:{
                on: {
                    RECIPIE_SELECTED:{
                        target:'getJobs',
                        actions:assign({layout_selectedRecipie: (ctx,evt)=> evt.data })
                    },
                    SET_JOB:{
                        target: 'getTasks',
                        actions:assign({layout_selected_job: (ctx,evt)=> evt.data })
                    },
                    SHOW_JOB_MODAL:{
                        target: 'recipieLoaded',
                        actions:assign({layout_showAddJobModal:  (ctx,evt)=> evt.data})
                    },
                    
                },
            },
            getJobs: {
                invoke:{
                    src: (context, event) => fetch(apiConfig.url + "jobs?recipieId=" +context.layout_selectedRecipie ).then(res => res.json()),
                    onDone: {
                        target: 'recipieLoaded',
                        actions: assign({ layout_jobList: (context, event) => event.data })
                    },
                    onError: {
                        target: 'failure',
                        actions: assign({ error: (context, event) => event.data })
                    }
                }
            },
            getTasks: {
                invoke:{
                    src: (context, event) => fetch(apiConfig.url+ "tasks?jobid=" + context.layout_selected_job ).then(res => res.json()),
                    onDone: {
                        target: 'recipieLoaded',
                        actions: assign({ layout_taskList : (context, event) => event.data })
                    },
                    onError: {
                        target: 'failure',
                        actions: assign({ error: (context, event) => event.data })
                    }
                }
            },
            failure: {},
        }
    }
        

}

export default layoutState;