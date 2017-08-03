<template>
  <div class="content">
    <Breadcrumb />
    <div class="body">
      <mu-content-block>
        <h1 class="text-center">{{apiRes.name}}</h1>
        <mu-row gutter>
          <mu-col width="100" tablet="50" desktop="50">
            <mu-select-field v-model="seletedOptionId" :labelFocusClass="['label-foucs']" label="I'd like to vote for" fullWidth>
              <mu-menu-item :value="false" :title="'Select an option'" disabled />
              <mu-menu-item v-for="option,index in apiRes.options" :key="index" :value="option._id" :title="option.name" />
            </mu-select-field>
            <mu-raised-button label="Submit Vote" primary @click="submitVote" v-if="!userHasVoted" />
            <mu-raised-button label="Change Vote" primary @click="updateVote" v-if="userHasVoted" :disabled="!enableChangeVoteButton" />
            <br/>
            <Sharing/>
          </mu-col>
          <mu-col width="100" tablet="50" desktop="50">
            <DoughnutChart :chartData="chartData" v-if="hasVotes" />
            <div class="text-no-votes" v-if="!hasVotes">
              No votes for this poll yet.
            </div>
          </mu-col>
        </mu-row>
      </mu-content-block>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import Breadcrumb from './sub/Breadcrumb'
import DoughnutChart from './sub/DoughnutChart'
import Sharing from './sub/Sharing'
const _groupBy = require('lodash/groupBy');
const _find = require('lodash/find');
const _findIndex = require('lodash/findIndex');
const _toArray = require('lodash/toArray');

export default {
  data() {
    return {
      apiRes: {},
      seletedOptionId: false
    }
  },
  computed: {
    ...mapState(['user']),
    poll_id() {
      return this.$route.params.id;
    },
    hasVotes() {
      const votes = this.apiRes.votes;
      if (!votes || votes.length === 0) return false;
      return true;
    },
    userHasVoted() {
      if (this.userVoteIndex === -1) {
        return false;
      }
      return true;
    },
    userSignedIn() {
      if (!this.user.userId) {
        return false;
      }
      return true;
    },
    userVoteIndex() {
      if (!this.userSignedIn) return -1;
      const votes = this.apiRes.votes;
      let voteIndex = _findIndex(votes, { created_by: this.user.userId });
      return voteIndex;
    },
    userVoteOptionId() {
      if (this.userVoteIndex === -1) return false;
      return this.apiRes.votes[this.userVoteIndex].poll_option_id;
    },
    groupedVotes() {
      const votes = this.apiRes.votes;
      if (!votes || votes.length === 0) return null;

      const grouped = _groupBy(votes, (obj) => {
        return obj.poll_option_id;
      });
      return grouped;
    },
    chartData() {
      let result = {};
      for (let key in this.groupedVotes) {
        result[key] = {};
        result[key].data = this.groupedVotes[key].length;
        let option = _find(this.apiRes.options, { _id: key });
        result[key].label = option.name;
      }
      result = _toArray(result);
      const data = result.map((obj) => {
        return obj.data;
      });
      const label = result.map((obj) => {
        return obj.label;
      });
      result = {
        data, label
      }
      return result;
    },
    enableChangeVoteButton() {
      return this.seletedOptionId !== this.userVoteOptionId;
    }
  },
  watch: {
    apiRes(apiRes) {
      if (this.userHasVoted) {
        this.seletedOptionId = this.userVoteOptionId;
      }
    },
    userSignedIn() {
      this.loadPoll();
    }
  },
  mounted() {
    this.loadPoll();
  },
  methods: {
    async loadPoll() {
      try {
        const res = await this.axios.get(`/poll/${this.poll_id}`);
        this.apiRes = res.data;
      } catch (err) {
        this.pino.error(err);
      }
    },
    async submitVote() {
      try {
        const res = await this.axios.post('/vote', {
          poll_id: this.poll_id,
          poll_option_id: this.seletedOptionId
        });
        this.loadPoll();
      } catch (err) {
        this.pino.error(err);
      }
    },
    async updateVote() {
      try {
        const res = await this.axios.put('/vote', {
          poll_id: this.poll_id,
          poll_option_id: this.seletedOptionId
        });
        this.loadPoll();
      } catch (err) {
        this.pino.error(err);
      }
    }
  },
  components: {
    Breadcrumb, DoughnutChart, Sharing
  }
}
</script>
<style scoped lang=scss>
.row {
  .col {
    padding: 10px 15px;
  }
}
</style>