class Device {
    constructor(name) {
        this.appliances = 'accuracy';
        this.namedevice = name;
    }
    getElectricity(power) {
        console.log(`power is ${power}`);
    }
}
const iron = new Device('iron');
const vacuumCleaner = new Device('vacuum cleaner');
  
iron.getElectricity('500w');
vacuumCleaner.getElectricity('400w');