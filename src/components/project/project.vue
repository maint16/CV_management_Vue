<template>
    <div>
        <h3>
            <span class="glyphicon glyphicon-asterisk"></span> Project
        </h3>
        <div class="row " v-for="project in projects">
            <!--project info-->
            <div class="col-md-12">
                <div class="row">
                    <h4>{{project.name}}</h4>
                </div>
                <div class="row">
                    Description : {{project.description}}
                </div>
                <div class="row">
                    Skills : <span v-if="project.projectSkills!=null" v-for="proSkill in project.projectSkills"
                                   class="project-skill">
                    <span v-if=" proSkill.skill != null">{{ proSkill.skill.name}}</span>
                </span>
                </div>
                <div class="row">
                    <div class="col-md-2"> Responsibilities:</div>
                    <div class="col-md-10">
                        <div class="row" v-if="project.projectRespons != null"
                             v-for="proResp in project.projectRespons">
                            <span v-if="proResp.responsibility != null">
                                {{proResp.responsibility.name}}
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    </div>

</template>

<script>
    export default {
        name: "project",
        data() {
            return {
                "projects": [
                    {
                        "description": "enim est tempor cillum",
                        "name": "Project 01",

                        "projectSkills": [
                            {
                                "skillId": 1,
                                "skill": {
                                    "name": "Skill 01"
                                }
                            },
                            {
                                "skillId": 2,
                                "skill": {
                                    "name": "Skill 02"
                                }
                            },
                            {
                                "skillId": 3,
                                "skill": {
                                    "name": "Skill 03"
                                }
                            }
                        ],
                        "projectRespons": [
                            {
                                "projectId": 1,
                                "responsibilityId": 1,
                                "responsibility":
                                    {
                                        "name": "Responsibility 01"
                                    },
                            },
                            {
                                "projectId": 1,
                                "responsibilityId": 2,
                                "responsibility":
                                    {
                                        "name": "Responsibility 02"
                                    },
                            },
                            {
                                "projectId": 1,
                                "responsibilityId": 3,
                                "responsibility":
                                    {
                                        "name": "Responsibility 03"
                                    },
                            }
                        ],
                    },
                    {
                        "description": "est dolor mollit in",
                        "name": "Project 02",
                        "projectSkills": [
                            {
                                "skillId": 1,
                                "skill": {
                                    "name": "Skill 01"
                                }
                            },
                            {
                                "skillId": 2,
                                "skill": {
                                    "name": "Skill 02"
                                }
                            },
                            {
                                "skillId": 3,
                                "skill": {
                                    "name": "Skill 03"
                                }
                            }
                        ],
                        "projectRespons": [
                            {
                                "projectId": 1,
                                "responsibilityId": 1,
                                "responsibility":
                                    {
                                        "name": "Responsibility 01"
                                    },
                            },
                            {
                                "projectId": 1,
                                "responsibilityId": 2,
                                "responsibility":
                                    {
                                        "name": "Responsibility 02"
                                    },
                            },
                            {
                                "projectId": 1,
                                "responsibilityId": 3,
                                "responsibility":
                                    {
                                        "name": "Responsibility 03"
                                    },
                            }
                        ],
                    },
                    {
                        "description": "Lorem",
                        "name": "Project 03",
                        "projectSkills": [
                            {
                                "skillId": 1,
                                "skill": {
                                    "name": "Skill 01"
                                }
                            },
                            {
                                "skillId": 2,
                                "skill": {
                                    "name": "Skill 02"
                                }
                            },
                            {
                                "skillId": 3,
                                "skill": {
                                    "name": "Skill 03"
                                }
                            }
                        ],
                        "projectRespons": [
                            {
                                "projectId": 1,
                                "responsibilityId": 1,
                                "responsibility":
                                    {
                                        "name": "Responsibility 01"
                                    },
                            },
                            {
                                "projectId": 1,
                                "responsibilityId": 2,
                                "responsibility":
                                    {
                                        "name": "Responsibility 02"
                                    },
                            },
                            {
                                "projectId": 1,
                                "responsibilityId": 3,
                                "responsibility":
                                    {
                                        "name": "Responsibility 03"
                                    },
                            }
                        ],
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .project-skill + .project-skill:before {
        content: ", ";
    }
</style>