<template>
    <div>
        <h3>
            <span class="glyphicon glyphicon-asterisk"></span> Project
        </h3>
        <div class="panel-group">
            <div class="panel panel-info" v-for="(project,index) in projects">
                <div class="panel-heading" role="button" @click="toggleAccordion(index)">
                    <h4 class="panel-title">{{project.name}}</h4>
                </div>
                <collapse v-model="showAccordion[index]">

                    <ul class="list-group">
                        <li class="list-group-item">
                            Description : {{project.description}}
                        </li>
                        <li class="list-group-item">
                            Skills :
                            <ul class="list-group" v-if="project.projectSkills!=null">
                                <li class="list-group-item" v-for="proSkill in project.projectSkills">

                                    <span v-if=" proSkill.skill != null">{{ proSkill.skill.name}}</span>
                                    <span class="badge">
                                      <span class="glyphicon glyphicon-remove"></span>
                                 </span>

                                    <span class="badge">
                                      <span class="glyphicon glyphicon-pencil"></span>
                                </span>

                                </li>
                            </ul>
                        </li>
                        <li class="list-group-item">
                            Responsibilities :
                            <ul class="list-group" v-if="project.projectRespons != null">
                                <li class="list-group-item" v-for="proResp in project.projectRespons">

                                    <span v-if="proResp.responsibility != null">
                                        {{proResp.responsibility.name}}
                                    </span>
                                    <span class="badge">
                                      <span class="glyphicon glyphicon-remove"></span>
                                    </span>

                                    <span class="badge">
                                      <span class="glyphicon glyphicon-pencil"></span>
                                    </span>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </collapse>
            </div>
        </div>
       
    </div>

</template>

<script>
    export default {
        name: "project",
        data() {
            return {
                showAccordion: [true, false, false],
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
    .project-skill + .project-skill:before {
        content: ", ";
    }
</style>