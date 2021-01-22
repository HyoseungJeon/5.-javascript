const childComponent = Vue.component('child-component',{
    props:['inputValue'],
    template:'<p>{{inputValue}}</p>'
});