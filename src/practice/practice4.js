const template2=`
<div>
        입력 : <input id="input-box" type="text" name="inputData" v-model="someData" 
        @keydown.enter="pressEnterKey"/>
    </div>

`

let anotherComponent = Vue.component('another-component',{
    props:{
        onPress: Function
    },
    data:function(){
        return{ someData:"" }
    },
    methods:{
        pressEnterKey:function(){
            this.$emit('emit-event',this.someData);
        }
    },
    template:template2
});


