import Conductor from 'conductor';

const containerCardPath = './cards/container-card.js';

export default class Environment {
  constructor(options) {
    const { containers } = options;

    this.conductorInstance = new Conductor();
    this.containerInstances = {};
    this.containers = containers;
    this.containerCardPath = containerCardPath;
    this.initCardManagerService(this.conductorInstance);

    window.Environment = this;
  }

  static toString() {
    return 'Card Environment';
  }

  static initCardManagerService(conductorInstance) {
    const cardManagerService = Conductor.Oasis.Service.extend({
      initialize(port) {
        this.sandbox.cardManagerPort = port;
      },

      addCard(card) {
        this.send('addCard', card);
      },

      destroyCards() {
        this.send('destroyCards');
      },
    });

    conductorInstance.addDefaultCapability('cardManager', cardManagerService);
  }

  sendMessage(containerKey, eventName, data = null) {
    const container = this.containerInstances[containerKey];

    if (!container) { return; }

    container.waitForLoad().then((loadedContainer) => {
      loadedContainer.sandbox.capabilities.cardManager[eventName](data);
    });
  }

  createContainerCard(containerId) {
    const { conductorInstance, contCardPath } = this;
    const options = this.containers[containerId];
    const { capabilities } = options || [];
    const adapter = Conductor.adapters.inline;

    conductorInstance.loadData(contCardPath, containerId, options);

    const containerCard = conductorInstance.load(contCardPath, containerId, {
      capabilities,
      adapter,
    });

    this.containerInstances[containerId] = containerCard;
    return containerCard;
  }
}
