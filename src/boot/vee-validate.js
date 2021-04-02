import {
  configure,
  extend,
  ValidationObserver,
  ValidationProvider
} from "vee-validate";
import { email, required } from "vee-validate/dist/rules";

export default async ({ Vue }) => {
  // Register it globally
  Vue.component("ValidationProvider", ValidationProvider);
  Vue.component("ValidationObserver", ValidationObserver);
};

// Add build-in rules
extend("required", required);
extend("email", email);

// Add custom rule
extend("minMaxValue", {
  validate: (value, { min, max }) => {
    return value >= Number(min) && value <= Number(max);
  },
  message: (fieldName, { min, max }) => {
    return `${fieldName} must be between ${min} and ${max}`;
  },
  params: ["min", "max"]
});
