<template>
 <div>

     <div class="row">
         <!-- user description -->
         <h3 class="my-4">
             user description
         </h3>
          <span v-for="des in descriptions">
              {{des.description}}
          </span>

     </div>
 </div>
</template>

<script>
    export default {
        name: "user-description",
        data() {
            return{
                descriptions:
                    [
                        {
                            description:'Description 1'
                        },
                        {
                            description:'Description 2'
                        },

                    ]
            }
        }
    }
</script>

<style scoped>

</style>