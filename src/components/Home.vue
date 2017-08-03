<template>
  <div class="content">
    
    <div class="body">
      <mu-content-block>
        <h1 class="text-center">FCC Voting</h1>
        <p class="text-center">Below are polls hosted by fcc-voting.</p>
        <p class="text-center">Select a poll to see the results and vote, or sign-in to make a new poll.</p>
        <AllPoll />
      </mu-content-block>
    </div>
  </div>
</template>
<script>

import AllPoll from './sub/AllPoll'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
     AllPoll
  }
}
</script>
<style scoped lang=scss>

</style>