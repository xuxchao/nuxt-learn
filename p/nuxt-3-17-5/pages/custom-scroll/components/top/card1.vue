<template>
    <div class="card1">
        <div class="card1_children_1"></div>
        <div class="card1_children_2">
            <div class="card1_children_2_1"></div>
            <div class="card1_children_2_2"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card1 {
    /* background-color: ; */
    display: flex;
    gap: 8px;

    .card1_children_1 {
        background-color: #F5F5F5;
        width: 136px;
        height: 136px;
    }

    .card1_children_2 {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 8px;

        .card1_children_2_1 {
            background-color: #F5F5F5;
            height: 30px;
            width: 50%;
        }
        .card1_children_2_2 {
            background-color: #F5F5F5;
            height: 30px;
            width: 100%;
        }
    }
}

</style>