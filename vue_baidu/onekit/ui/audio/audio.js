Component({
  options: {
        addGlobalClass: true,
    },
  properties: {onekitId:{type:String,value:""},     onekitClass:{type:String,value:""},         onekitStyle:{type:String,value:""},
    
      src:{
          type: String,
          value: "",
      },
      controls:{
          type: Boolean,
          value: false,
      },
      loop:{
        type: Boolean,
        value: false,
      },
      
  },
   methods: {
        audio_play(e){
          console.log("audio_play", e);
          this.triggerEvent('play')
        },
        audio_pause(e){
          console.log("audio_pause", e);
          this.triggerEvent('pause')
        },
        audio_ended(e){
          console.log("audio_ended", e);
          this.triggerEvent('ended')
        },
        audio_timeupdate(e){
          console.log("audio_timeupdate", e);
          this.triggerEvent('timeupdate')
        },
        
}
});
