export default function pathFromCommands(commands) {
  let svgCommands = commands.map((command, i) => {
    let name = '';
    if (command.length === 2) {
      name = i === 0 ? 'M' : 'L';
    }

    if (command.length === 4) {
      name = 'C';
    }

    if (command.length === 6) {
      name = 'Q';
    }

    return name + ' ' + command.join(' ');
  });

  return svgCommands.join(' ');
}
