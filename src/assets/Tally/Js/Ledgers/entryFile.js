import { StartFunc as StartFuncFormLoad } from "./FormLoad/entryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
    };
};

StartFunc();