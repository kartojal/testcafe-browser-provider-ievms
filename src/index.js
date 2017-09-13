const iectrl = require('iectrl');
const Promise = require('bluebird');

export default {
    // Multiple browsers support
    vmInstances:    {},
    isMultiBrowser: true,

    // Required - must be implemented
    // Browser control
    async openBrowser (id, pageUrl, browserName) {
        const vm = iectrl.IEVM.find(browserName)[0];

        if (typeof vm === 'undefined') throw new Error('VM Not found');
        const isMissing = await vm.missing();
        const isRunning = await vm.running();
        if (isMissing) {
            throw new Error(
                'VM is not installed. Check https://github.com/xdissent/ievms to install dependencies.'
            );
        }
        if (isRunning) return vm.open(pageUrl);
        this.vmInstances[id] = browserName;
        await vm.start(true);
        return vm.open(pageUrl);
    },

    async closeBrowser (id) {
        const browserName = this.vmInstances[id];
        const vm = iectrl.IEVM.find(browserName)[0];
        await vm.stop();
    },

    // Optional - implement methods you need, remove other methods
    // Initialization
    async init () {
        return;
    },

    async dispose () {
        return;
    },

    // Browser names handling
    async getBrowserList () {
        const allVms = await iectrl.IEVM.all();
        const installedVms = await Promise.filter(allVms, async vm => {
            const missing = await vm.missing();
            return !missing;
        });

        return installedVms.map(x => x.name);
    },

    async isValidBrowserName (browserName) {
        return iectrl.IEVM.names.includes(browserName);
    },

    // Extra methods
    async resizeWindow (/* id, width, height, currentWidth, currentHeight */) {
        this.reportWarning(
            'The window resize functionality is not supported by the "ievms" browser provider.'
        );
    },

    async takeScreenshot (/* id, screenshotPath, pageWidth, pageHeight */) {
        this.reportWarning(
            'The screenshot functionality is not supported by the "ievms" browser provider.'
        );
    }
};
