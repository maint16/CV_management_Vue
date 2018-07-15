<template>
    <div>
        <h3>
            <span class="glyphicon glyphicon-asterisk"></span> Skill
        </h3>
        <!-- Skill -->
        <div class="row " v-for="item in skillCategorys">
            <h4>{{item.name}}</h4>
            <div class="col-md-12" v-if="item.personalSkill != null ">
                <div class="row" v-for="perSkill in item.personalSkill">
                    <div class="col-md-12" v-if=" perSkill.skill != null">
                        {{perSkill.skill.name}}
                    </div>
                </div>
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
        }
    }
</script>

<style scoped>

</style>