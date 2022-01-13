const msgFilter = require('./filter');
const commandClass = require('./command-class');

/*
 * ZwaveJs2Mqtt Filter node
 *
 * Status:
 *   - grey   dot  "Idling, waiting for images to process"
 *   - green  dot  "Successfully processed a message"
 *   - yellow ring "Processing message"
 *   - red    ring "Error processing message"
 */

module.exports = function(RED) {
    function ZwaveJs2MqttFilter(config) {
        RED.nodes.createNode(this, config);
        let node = this;

        node.status({fill:"grey",shape:"dot",text:"idling"});
        node.on('input', function(msg, send, done) {
            node.status({fill:"yellow",shape:"ring",text:"processing..."});
            filter(msg, config).then(output => { 
                if (output) {
                    node.status({fill: "green", shape: "dot", text: "match"});
                } else {
                    node.status({fill: "yellow", shape: "dot", text: "miss"});
                }
                setTimeout(function () {
                    node.status({fill: "grey", shape: "dot", text: "idling"});
                }, 2000);

                send(output);
            }).catch(error => {
                node.status({fill:"red",shape:"ring",text:"error detecting objects"});
                done(error);
            });
        });
    }
    RED.nodes.registerType("zwavejs2mqtt-filter", ZwaveJs2MqttFilter, {});

    RED.httpAdmin.get("/z-wave-command-classes", RED.auth.needsPermission('zwavejs2mqtt-filter.read'), function(req, res) {
        commandClass.getCommandClasses().then(classes => {
          res.json(classes);
        });
    });
};

function filter(msg, config){
    return new Promise((resolve, reject) => {
        const topic = msg.topic || '';
        const topicParts = topic.split('/');
        let location = config.hasLocation ? 1:0;

        msgFilter.prefix(topicParts[0], config)
            .then(() => {
                return config.hasLocation ? msgFilter.location(topicParts[1], config) : Promise.resolve();
            })
            .then(() => {
                return msgFilter.nodeid(topicParts[1+location], config);
            })
            .then(() => {
                return msgFilter.commandClass(topicParts[2+location], config);
            })
            .then(() => {
                return msgFilter.endpoint(topicParts[3+location], config);
            })
            .then(() => {
                return msgFilter.property(topicParts[4+location], config);
            })
            .then(() => { // To JSON or just as is
                if (config.jsonPayload) {
                    msg.payload = JSON.parse(msg.payload);
                }
                resolve(msg);
            })
            .catch(err => {
                resolve(null);
            });
    });
}