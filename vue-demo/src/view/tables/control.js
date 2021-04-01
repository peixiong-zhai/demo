export default {
    name:'tables',
    data(){
        return {
           colorText:false,
           inValue:"",
           arr:[],
           storage:"",
           outStorage:"",
           offset:""
        }
    },
    methods:{
        remove(){
            localStorage.removeItem("storage")
        },
        put(){
            this.outStorage=localStorage.getItem("storage")
        },
        add(){
            localStorage.setItem("storage",this.storage)
        },
        changeTree(){
           this.colorText=true
        },
        sortArr(){
            if (this.inValue.length<2){
                this.arr=this.inValue;
                return arr;
            }else{
                this.arr=this.inValue.split(",");
                this.arr.sort(this.decenser);
                

            }
            

        },
        decenser(a,b){
            return a-b
        },
        showWidth(){
            this.offset=this.$refs.offse.offsetWidth;
        }
    },
    mounted(){
        this.showWidth;
    }
      
    
}