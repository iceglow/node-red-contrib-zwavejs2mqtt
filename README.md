# node-red-contrib-zwavejs2mqtt
Simple Node-RED nodes for interacting with Zwavejs2mqtt.

## Filter
Can be configured to filter messages from a Zwave2mqtt gateway by matching the msg.topic.

### Inputs
Message from zwavejs2mqtt.

**msg.topic**: The topic to filter on.

### Outputs
The node passes the input straight through by default.

**msg.payload**: If configured for it, can be parsed to JSON from String.

## Credits
Credits should go to [Z-Wave JS](https://github.com/zwave-js) for providing such an awesome zwave implementation!
Also to [Zwavejs2mqtt](https://github.com/zwave-js/zwavejs2mqtt) for a fantastic gateway and control panel!

## Buy me a coffee
Find it useful? Please consider buying me or other contributors a coffee.

<a href="https://www.buymeacoffee.com/iceglow" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>