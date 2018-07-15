<template>
    <div>
        <h3>
            <span class="glyphicon glyphicon-asterisk"></span> user description
        </h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="des in descriptions">

                <span> {{des.description}}</span>
                <span class="badge">
                    <span class="glyphicon glyphicon-remove"></span>
                </span>

                <span class="badge">
                    <span class="glyphicon glyphicon-pencil"></span>
                </span>

            </li>
        </ul>
        <modal v-model="open1"
               title="Create"
               size="lg"
               :footer="false">
            <PopupUser v-on:click-ok="addUserDescription($event)" :id="1"/>
        </modal>

        <btn type="info" @click="open1=true">Add new</btn>

    </div>
</template>


<script>
    import PopupUser from './description-detail.vue';

    export default {
        name: "user-description",
        components: {
            PopupUser
        },
        data() {
            return {
                open1: false,
                descriptions:
                    [
                        {
                            description: 'Description 1'
                        },
                        {
                            description: 'Description 2'
                        },

                    ]
            }
        },
        methods: {
            addUserDescription: function (obj) {
                this.open1 = false;
            }
        }
    }
</script>

<style scoped>

</style>