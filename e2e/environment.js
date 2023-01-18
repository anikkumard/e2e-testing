const {
    DetoxCircusEnvironment,
} = require('detox/runners/jest-circus');
class CustomDetoxEnvironment extends DetoxCircusEnvironment {
    constructor(config, context) {
        super(config, context);
    
        // Can be safely removed, if you are content with the default value (=300000ms)
        this.initTimeout = 300000;
      }

  async handleTestEvent(event, state) {
    const { name } = event;

    if (['test_start', 'test_fn_start'].includes(name)) {
      this.global.testFailed = false;
      console.log("test passed...........................");
    }

    if (name === 'test_fn_failure') {
      this.global.testFailed = true;
      console.log("test failed...........................");
    }

    await super.handleTestEvent(event, state);
  }
}
module.exports = CustomDetoxEnvironment;