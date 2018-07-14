<template>
    <div>
        <!-- photo-->
        <div class="row">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../Image/Photo.jpg" alt="">
        </div>
        <!--end photo-->
        <hr>
        <!--information-->
        <div class="row">
            <div class="col-md-6"> Full name :</div>
            <div class="col-md-6">{{fullName}}</div>
        </div>
        <div class="row">
            <div class="col-md-6"> Birthday :</div>
            <div class="col-md-6">{{birthday}}</div>
        </div>

        <!--end information-->
    </div>
</template>

<script>
    export default {
        name: "my-profile",
        data(){
            return {
                fullName: 'Nguyen Thi Mai',
                birthday:"23-02-2029",

            }
        }
    }
</script>

<style scoped>

</style>