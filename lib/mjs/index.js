import { directive } from "lit/directive.js";
import { ObserverDirective } from "./observer-directive";
export function observe(source) {
    return directive((ObserverDirective))(source);
}
