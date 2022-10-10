const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try{
            core.notice("Calling the custom Action");
        }catch(error){
            core.setFailed(error.message);
        }
    }
)();