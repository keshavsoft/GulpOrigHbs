import { StartFunc as StartFuncFuncToRun } from "./funcToRun.js";

let StartFunc = () => {
    document.addEventListener('DOMContentLoaded', StartFuncFuncToRun);
};

export { StartFunc };