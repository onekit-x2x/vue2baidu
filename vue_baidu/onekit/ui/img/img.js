// onekit/ui/img/img.js
import {fixurl} from "../../thekit"
Component({
  options: {
        addGlobalClass: true,
    },
  properties: {Id:{type:String,value:""},     onekitClass:{type:String,value:""},         onekitStyle:{type:String,value:""},
   
    width:Number,
    height:Number,
    src:{
      type:String,
      value:''
    },
    
  },



  /**
   * 组件的方法列表
   */
  methods: {
    image_load(e){
      const size = e.detail;
      var data2 = {};
      if(!this.properties.width && !this.properties.height){
        data2.baidu_width = size.width+"px";
        data2.baidu_height = size.height+"px";
      }else      if(!this.properties.width && this.properties.height){
        data2.baidu_width = size.width*this.properties.height/size.height+"px";
      }else   if(this.properties.width && !this.properties.height){
        data2.baidu_height = size.height*this.properties.width/size.width+"px";
        }
      this.setData(data2);
    }
  },
  lifetimes: {
    attached: function() {
      const pages = getCurrentPages();
      const currentUrl = pages[pages.length-1].route;
      const baidu_width =this.properties.width?this.properties.width+"px":"auto";
      const baidu_height =this.properties.height?this.properties.height+"px":"auto";
      const baidu_src = "/"+fixurl(currentUrl,this.properties.src);
      this.setData({baidu_width,baidu_height,baidu_src});
    },
    detached: function() {
     
    },
  },
})
