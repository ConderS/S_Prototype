export class RuntimeListener {
      constructor() {
          this.initializeMessagesListener();
      }
      initializeMessagesListener() {
          chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
              const command = message['command'];
              console.log('Received runtime command: ' + command);
              const response = { message: 'Aye!' };
              sendResponse(response);
          });
      }

      turnOff() {
        chrome.browserAction.setIcon({path: "off.png"});
      }

      turnOn() {
        chrome.browserAction.setIcon({path: "icon.png"});
      }
}
