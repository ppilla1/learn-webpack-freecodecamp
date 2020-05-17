import { AlertService } from "./app-one/services/alert.service";
import { ComponentService } from "./app-one/services/component.service";
import { run } from "./app-one/app-one";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);