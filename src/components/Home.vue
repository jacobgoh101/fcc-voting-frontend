<template>
  <div class="layout">
    <Navi/>
    <div class="content">
      <Breadcrumb />
      <div class="body">
        <mu-content-block>
          <h1 class="text-center">FCC Voting</h1>
          <p class="text-center">Below are polls hosted by fcc-voting.</p>
          <p class="text-center">Select a poll to see the results and vote, or sign-in to make a new poll.</p>
          <AllPoll />
        </mu-content-block>
      </div>
    </div>
    <div class="footer">
      Muse-UI ©2017 Created by Muse-UI
    </div>
  
  </div>
</template>
<script>
import Navi from './sub/Navi'
import Breadcrumb from './sub/Breadcrumb'
import AllPoll from './sub/AllPoll'
export default {
  data() {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val
    }
  },
  components: {
    Navi, Breadcrumb, AllPoll
  }
}
</script>
<style scoped lang=scss>

</style>