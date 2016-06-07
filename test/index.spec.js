import {Application} from 'spectron';
import path from 'path';
import chai from 'chai';
chai.should();

describe ('app', function () {
  this.timeout(10000);

  beforeEach(() => {
    this.app = new Application({
      path: path.resolve(__dirname, '../node_modules/.bin/electron'),
      args: [path.resolve(__dirname, '../')],
    });
    return this.app.start();
  });

  afterEach(() => {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it('window number is 1.', () => {
    return this.app.client.getWindowCount().then((count) => {
      count.should.equal(1);
    });
  });

  it('title is "electron boilerplate".', () => {
    return this.app.browserWindow.getTitle().then((title) => {
      title.should.equal('electron boilerplate');
    });
  });
});
