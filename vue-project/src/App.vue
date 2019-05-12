<template>
    <div class="container pt-2">
        <h1>{{title}}</h1>
        <hr>
        <app-counter ></app-counter>
        <app-second-counter ></app-second-counter>
        <hr>
        <app-actions ></app-actions>
    </div>
</template>

<script>

    import Counter from './counter'
    import SecondCounter from './SecondCounter'
    import Actions from './actions'
    export default {

        components: {
            appCounter: Counter,
            appActions: Actions,
            appSecondCounter: SecondCounter
        },
        computed: {
            title() {
                return this.$store.getters.title
            }
        }

    }
</script>

<style scoped>

</style>
