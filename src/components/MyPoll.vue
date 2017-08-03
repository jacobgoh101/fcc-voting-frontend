<template>
  <div class="content">
    
    <div class="body">
      <mu-content-block>
        <h1 class="text-center">All My Poll</h1>
        <AllMyPoll/>
      </mu-content-block>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

import AllMyPoll from './sub/AllMyPoll'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
     AllMyPoll
  }
}
</script>
<style scoped lang=scss>
.btn-create-poll {
  float: right;
  margin-top: 20px;
}
</style>