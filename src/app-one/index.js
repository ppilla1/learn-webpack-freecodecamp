import { AlertService } from "./services/alert.service";
import { ComponentService } from "./services/component.service";
import { run } from "./app-one";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);