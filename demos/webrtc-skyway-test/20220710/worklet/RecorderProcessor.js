class RecorderProcessor extends AudioWorkletProcessor {
   constructor(){
     this.recordedSamples = [[],[]];
   }
   
   
   process (inputs, outputs, parameters){
     const input = inputs[0];
     const ch = input.length; 
     for (let i  = 0; i < ch; i++)
       this.recordedSamples[ch].push(input[ch]);
   }
}

registerProcessor('recorder', RecorderProcessor);
