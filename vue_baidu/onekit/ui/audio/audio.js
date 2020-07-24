Component({
  options: {
        addGlobalClass: true,
    },
  properties: {
      Style:String,
      Class:String,
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
          this.triggerEvent('play',e.details)
        },
        audio_pause(e){
          console.log("audio_pause", e);
          this.triggerEvent('pause',e.details)
        },
        audio_ended(e){
          console.log("audio_ended", e);
          this.triggerEvent('ended',e.details)
        },
        audio_timeupdate(e){
          console.log("audio_timeupdate", e);
          this.triggerEvent('timeupdate',e.details)
        },
        
}
});
