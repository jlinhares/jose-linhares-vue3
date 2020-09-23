<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <button  
              :class="{ 'navbar-toggle': true, collapsed: !menuExpanded }" 
              data-toggle="collapse" 
              data-target="#bs-example-navbar-collapse-1" 
              :aria-expanded="menuExpanded" 
              @click="toggleMenu()"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" v-slot="{}">
          <a class="navbar-brand" style="color: yellow; font-weight: bold;" @click="selectedView = 'HOME'">Altar.io challenge</a>
        </router-link>
      </div>

      <div v-bind:class="{'collapse': true, 'navbar-collapse': true, 'in': menuExpanded}"  id="bs-example-navbar-collapse-1" v-bind:aria-expanded="menuExpanded" >
        <ul class="nav navbar-nav">
            <li :class="{ active : selectedView === 'GEN' }" >
              <router-link to="/generator">
                <a @click="selectedView = 'GEN'">Generator<span class="sr-only">(current)</span></a>
              </router-link>
            </li>
            <li v-bind:class="{ active: selectedView === 'PAY' }">
              <router-link to="/payment">
                <a @click="selectedView = 'PAY'">Payment</a>
              </router-link>
            </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li v-bind:class="{ active: selectedView === 'ABOUT' }">
              <router-link to="/about">
                <a @click="selectedView = 'ABOUT'">About</a>
              </router-link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return {
      menuExpanded: false,
      selectedView: "HOME"
    }
  },
  methods:{
    toggleMenu(){
      this.menuExpanded = ! this.menuExpanded;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
