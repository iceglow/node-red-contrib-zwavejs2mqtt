const filter = {
    /**
     * Paint outlines on the supplied picture.
     *
     * @param buffer image buffer to painnt outlines on.
     * @param outlines the outlines to paint. {x: *, width: number, y: *, height: number}
     * @param outlineColor color to use for the outline.
     * @returns {PromiseLike<T>}
     */
    prefix: function(prefix, config) {
        return new Promise((resolve, reject)  => {
            if (prefix !== undefined && prefix === config.prefix) {
                resolve();
            } else {
                reject();
            }
        });
    },

    location: function(location, config) {
        return new Promise((resolve, reject) => {
            if (config.nodeidType == 'str') {
                if (location === config.nodeid) {
                    resolve();
                } else {
                    reject();
                }
            } else if (config.nodeidType == 're') {
                var re = new RegExp(config.nodeid);
                
                if (re.test(location)) {
                    resolve();
                } else {
                    reject();
                }
            } else {
                reject();
            }
        });
    },

    nodeid: function(nodeid, config) {
        return new Promise((resolve, reject) => {
            if (config.nodeidType == 'num') {
                if (nodeid === config.nodeid) {
                    resolve();
                } else {
                    reject();
                }
            } else if (config.nodeidType == 'str') {
                if (nodeid === config.nodeid) {
                    resolve();
                } else {
                    reject();
                }
            } else if (config.nodeidType == 're') {
                var re = new RegExp(config.nodeid);
                
                if (re.test(nodeid)) {
                    resolve();
                } else {
                    reject();
                }
            } else {
                reject();
            }
        });
    },

    commandClass: function(commandClass, config) {
        return new Promise((resolve, reject) => {
            if (commandClass !== undefined && commandClass === config.commandClass) {
                resolve();
            } else {
                reject();
            }
        });
    },

    endpoint: function(endpoint, config) {
        return new Promise((resolve, reject) => {
            if (endpoint !== undefined && endpoint === config.endpoint) {
                resolve();
            } else {
                reject();
            }
        });
    },

    property: function(property, config) {
        return new Promise((resolve, reject) => {
            if (config.propertyType == 'num') {
                if (property === config.property) {
                    resolve();
                } else {
                    reject();
                }
            } else if (config.propertyType == 'str') {
                if (property === config.property) {
                    resolve();
                } else {
                    reject();
                }
            } else if (config.propertyType == 're') {
                var re = new RegExp(config.property);
                
                if (re.test(property)) {
                    resolve();
                } else {
                    reject();
                }
            } else {
                reject();
            }
        });
    }
};

module.exports = filter;