import { htmlSafe } from '@ember/string';

export default function styleSet(options = {}) {
  const styles = Object.keys(options).map((key) => {
    return `${key}:${options[key]};`;
  });

  const stylesString = styles.join('');

  return htmlSafe(stylesString);
}
