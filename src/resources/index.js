export function configure(config) {
  config.globalResources([
    './elements/checkbox-group',
    './elements/navigation.html',
    './elements/radio-group',
    './elements/text-input',
    './value-converters/alpha',
    './value-converters/proper-case'
  ]);
}
