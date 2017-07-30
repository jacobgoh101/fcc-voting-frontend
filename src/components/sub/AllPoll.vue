<template>
    <div class="AllPoll">
        <mu-table :showCheckbox="false">
            <mu-thead>
                <mu-tr>
                    <mu-th>Name</mu-th>
                    <mu-th>Created By</mu-th>
                    <mu-th>Created Date</mu-th>
                </mu-tr>
            </mu-thead>
            <mu-tbody>
                <mu-tr v-for="(poll,index) in polls" key=index>
                    <mu-td @click="goToPoll(poll._id)">{{poll.name}}</mu-td>
                    <mu-td @click="goToPoll(poll._id)">{{poll.created_by_email}}</mu-td>
                    <mu-td @click="goToPoll(poll._id)">{{poll.created_date}}</mu-td>
                </mu-tr>
            </mu-tbody>
        </mu-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            polls: []
        }
    },
    methods: {
        goToPoll(id) {
            this.$router.push(`poll/${id}`);
        }
    },
    mounted() {
        this.axios.get('/poll').then(res => {
            this.polls = res.data;
        }).catch(err => console.error(err));
    }
}
</script>
<style scoped lang=scss>

</style>