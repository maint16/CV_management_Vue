<template>
  <div id="app">
    <NavigationBar/>

    <!-- Page Content -->
    <div class="container">
      <!-- Skill -->
      <div class="row">
        <div class="col-md-7" aria-rowspan="2">
          <div class="container">
              <Skill/>
            <hr>
            <div class="row ">
              <h3 >
                Project
              </h3>

            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="container">
            <div class="row">
              <img class="img-fluid rounded mb-3 mb-md-0" src="Photo.jpg" alt="">
            </div>
            <hr>
            <div class="row">
              <!-- user description -->
              <h3 >
                user description
              </h3>

            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    import NavigationBar from './components/navigation-bar.vue';
   import  Skill from './components/Skill.vue';
    export default {
      components:{
          HelloWorld,
          NavigationBar,
          Skill
      }
    }
</script>

<style lang="scss">
</style>
