import fa from "./IR_fa.json";

export function _t(input) {
  return fa[input.toLowerCase()]
    ? fa[input.toLowerCase()]
    : input[0].toUpperCase() + input.slice(1);
}
