const template=`
<div>
        입력 : <input id="input-box" name="inputBox" v-model="someData" 
        @keydown.enter="pressEnterKey"/>
    </div>

`

let childComponent = Vue.component('child-component',{
    props:{
        onPress:Function
    },
    data:function(){
        return{ someData:"" }
    },
    methods:{
        pressEnterKey:function(){
            this.onPress(this.someData);
        }
    },
    template:template
});


