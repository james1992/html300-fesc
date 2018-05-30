Vue.component('heading', {
    template: '<a href="index.html" id="name">Florida Energy Systems Consortium</a><div id="right"><div class="callToAction"><a href="#">Subscribe to our Newsletter!</a></div><i class="fas fa-bars fa-2x" onclick="menuOn()"></i></div>'
});

var vm = new Vue({
    el: '#header-component'
});