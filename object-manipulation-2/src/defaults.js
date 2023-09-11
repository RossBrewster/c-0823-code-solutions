/* exported defaults */
function defaults(target, source) {
  for (const key in target) {
    if (target[source[key]] === undefined) {
      target[source[key]] = source[key];
    }
  }
}
