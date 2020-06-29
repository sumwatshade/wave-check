const { exec } = require('child_process');
const path = require('path');
const glob = require('glob');

function getArgs() {
  const routes = glob.sync(path.join(__dirname, 'routes', '**/*.sh'));

  const argsArray = routes.reduce((acc, next) => acc.concat([
    next.substring(next.indexOf('/routes/') + '/routes'.length, next.length - 3),
    `'. ${next}'`,
  ]), []);

  return argsArray.join(' ');
}

const command = `shell2http -export-vars=SURFLINE_USERNAME,SURFLINE_PASSWORD ${getArgs()}`;
console.info(command);

exec(command, (error, stdout, stderr) => {
  if (error) {
    if (error.indexOf('command not found') >= 0) {
      console.error(
        'Please follow these instructions to install shell2http: https://github.com/msoap/shell2http#install',
      );
    } else {
      console.log(`error: ${error.message}`);
    }
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
});
