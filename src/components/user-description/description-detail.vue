<template>
    <div>
        <form @submit="$event.preventDefault();">
            <div class="row">
                <div class="col-md-2">
                    <label for="inputDescription">Description : </label>
                </div>

                <div class="col-md-10">
                    <div class="form-group">
                    <textarea  class="form-control" placeholder="Description" id="inputDescription"
                               v-model="description"
                               rows="3"></textarea>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="form-group">
                        <button class="btn btn-primary"
                                @click="vOnOkClicked()">Save</button>
                        <span>&nbsp;</span>
                        <button class="btn btn-default">Cancel</button>
                    </div>
                </div>
            </div>

        </form>
    </div>

</template>

<script>
    export default {
        name: "description-detail",
        props: {
            id: null
        },
        data: function(){
            return {description: null}
        },
        methods:{
            vOnOkClicked(){
                this.$emit('click-ok', {description: this.description,id:this.id});
            }
        },

    }
</script>

<style scoped>

</style>