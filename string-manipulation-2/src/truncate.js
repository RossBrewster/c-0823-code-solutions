/* exported truncate */
function truncate(length, string) {
  const str = string.slice(0, length);
  return str + '...';
}
