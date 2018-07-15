<template>
    <div>
        <h3>
            <span class="glyphicon glyphicon-asterisk"></span> Skill
        </h3>
        <!-- Skill -->
        <div class="panel-group">
            <div class="panel panel-info" v-for="(item,index) in skillCategorys">
                <div class="panel-heading" role="button" @click="toggleAccordion(index)">
                    <h4 class="panel-title">{{item.name}}</h4>
                </div>
                <collapse v-model="showAccordion[index]">
                    <div class="panel-body">
                        <ul class="list-group" v-if="item.personalSkill != null ">
                            <li class="list-group-item" v-for="perSkill in item.personalSkill">

                                <span v-if=" perSkill.skill != null">  {{perSkill.skill.name}}</span>
                                <span class="badge">
                                      <span class="glyphicon glyphicon-remove"></span>
                                 </span>

                                <span class="badge">
                                      <span class="glyphicon glyphicon-pencil"></span>
                                </span>

                            </li>
                        </ul>
                    </div>
                </collapse>
            </div>
        </div>
        <!-- End skill -->
    </div>

</template>

<script>
    export default {
        name: "skill",
        data() {
            return {
                showAccordion: [true, false, false],
                "skillCategorys": [
                    {
                        "createdTime": -30992809,
                        "id": 1,
                        "name": "cillum est",
                        "photo": "veniam enim in ullamco cillum",
                        "userId": 1,
                        "personalSkill": [
                            {
                                "createdTime": 49344791,
                                "point": 38,
                                "skillCategoryId": 1,
                                "skillId": 1,
                                "skill": {
                                    "createdTime": 17778829,
                                    "id": 1,
                                    "name": "Skill 01"
                                }
                            },
                            {
                                "createdTime": -60687818,
                                "point": 20,
                                "skillCategoryId": 1,
                                "skillId": 2,
                                "skill": {
                                    "createdTime": 17778829,
                                    "id": 1,
                                    "name": "Skill 02"
                                }
                            }]

                    },
                    {
                        "createdTime": -30992809,
                        "id": 1,
                        "name": "Front end",
                        "photo": "veniam enim in ullamco cillum",
                        "userId": 1,
                        "personalSkill": [
                            {
                                "createdTime": 49344791,
                                "point": 38,
                                "skillCategoryId": 1,
                                "skillId": 1,
                                "skill": {
                                    "createdTime": 17778829,
                                    "id": 1,
                                    "name": "Skill 01"
                                }
                            },
                            {
                                "createdTime": -60687818,
                                "point": 20,
                                "skillCategoryId": 1,
                                "skillId": 2,
                                "skill": {
                                    "createdTime": 17778829,
                                    "id": 1,
                                    "name": "Skill 02"
                                }
                            }]

                    },
                    {
                        "createdTime": -30992809,
                        "id": 1,
                        "name": "Back end",
                        "photo": "veniam enim in ullamco cillum",
                        "userId": 1,
                        "personalSkill": [
                            {
                                "createdTime": 49344791,
                                "point": 38,
                                "skillCategoryId": 1,
                                "skillId": 1,
                                "skill": {
                                    "createdTime": 17778829,
                                    "id": 1,
                                    "name": "Skill 01"
                                }
                            },
                            {
                                "createdTime": -60687818,
                                "point": 20,
                                "skillCategoryId": 1,
                                "skillId": 2,
                                "skill": {
                                    "createdTime": 17778829,
                                    "id": 1,
                                    "name": "Skill 02"
                                }
                            }]

                    },
                ],
                "total": 100
            }
        },
        methods: {
            toggleAccordion(index) {
                if (this.showAccordion[index]) {
                    this.$set(this.showAccordion, index, false)
                } else {
                    this.showAccordion = this.showAccordion.map((v, i) => i === index)
                }
            }
        }
    }
</script>

<style scoped>

</style>