/* Javascript modules importing */
import { inputsAreValid } from "./utils/inputs-are-valid.util";
import { parseInputs } from "./utils/parse-inputs.util";
import { AlertService } from "./services/alert.service";
import { ComponentService } from "./services/component.service";

/* CSS modules importing */
import "./style.css";

/* SASS modules importing */
import "./main.scss";

const alertService = new AlertService();
const componentService = new ComponentService();

const run = (alertService, componentService) => {
    alertService.hideErrors();
  
    componentService.onClick(() => {
      
      alertService.hideErrors();
  
      const inputs = componentService.getInputs();
      const parsedInputs = parseInputs(...inputs);
  
      if (inputsAreValid(...parsedInputs)) {
        const [numA, numB] = parsedInputs;
        componentService.setResult(numA + numB);
      } else {
        componentService.setResult("");
        alertService.handleAdditionError(inputs, parsedInputs);
      }
    });
  
  };

run(alertService, componentService);