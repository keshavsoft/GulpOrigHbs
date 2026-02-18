import { StartFunc as StartFuncFromDOMContentLoaded } from "./DOMContentLoaded/entryFile.js";

const StartFunc = async () => {
    StartFuncFromDOMContentLoaded();
};

export { StartFunc };
