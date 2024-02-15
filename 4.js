function Device(name){
    this.appliances = 'accuracy';
    this.namedevice = name;
  }
  
  Device.prototype.getElectricity = function(power){
    console.log(`power is ${power}`);
  }
  
  const iron = new Device('iron');
  const vacuumCleaner = new Device('vacuum cleaner');
  
  iron.getElectricity('500w');
  vacuumCleaner.getElectricity('400w');