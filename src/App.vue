<template>
    <div id="app">
        <NavigationBar/>

        <!-- Page Content -->
        <div class="container">
            <!-- Skill -->
            <div class="row">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-12">
                            <Skill/>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-12">
                            <project/>
                        </div>
                    </div>
                    <hr>

                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-md-12">
                            <my-profile/>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-12">
                            <user-description/>
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
    import Skill from './components/skill.vue';
    import Project from './components/project.vue';
    import UserDescription from './components/user-description.vue';
    import MyProfile from "./components/my-profile";

    export default {
        components: {
            MyProfile,
            HelloWorld,
            NavigationBar,
            Skill,
            Project,
            UserDescription
        }
    }
</script>

<style lang="scss">
</style>
