<template>
  <div class="content">
    <Breadcrumb />
    <div class="body">
      <mu-content-block>
        <h1 class="text-center">Make a new poll!</h1>
        <mu-text-field label="Title" hintText="" fullWidth v-model="name" />
        <mu-text-field label="Options" hintText="1 option per line" multiLine :rows="3" :rowsMax="6" fullWidth v-model="options" />
        <div class="clearfix">
          <mu-raised-button label="Create Poll" class="btn-create-poll" primary @click="createPoll" />
        </div>
      </mu-content-block>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Breadcrumb from './sub/Breadcrumb'
const cleanArray = require('clean-array')
const arrayHasDuplicates = require('array-has-duplicates')
export default {
  data() {
    return {
      name: "",
      options: ""
    }
  },
  methods: {
    ...mapMutations(['showLoadingOverlay', 'hideLoadingOverlay']),
    createPoll() {
      if (!this.validateInput()) return;
      let poll_id = "";
      this.showLoadingOverlay();
      this.axios.post('/poll', {
        name: this.name
      }).then(res => {
        poll_id = res.data._id;
        return poll_id;
      }).then(poll_id => {
        let options = this.options.split("\n");
        options = cleanArray(options);
        const promiseArr = options.map((option, index) => {
          return this.axios.post('/pollOption', {
            name: option,
            poll_id: poll_id
          }).then(res => {
            return res.data;
          });
        });
        return Promise.all(promiseArr);
      }).then(pollOptions => {
        this.hideLoadingOverlay();
        return this.$router.push(`poll/${poll_id}`);
      }).catch(err => console.error(err));
    },
    validateInput() {
      if (!this.name) {
        alert("Name field is empty");
        return false;
      }
      if (!this.options) {
        alert("Options field is empty");
        return false;
      }
      let options = this.options.split("\n");
      options = cleanArray(options);
      if (options.length < 2) {
        alert("A poll needs more than 1 option");
        return false;
      }
      if (arrayHasDuplicates(options)) {
        alert("Options field contains duplicated values");
        return false;
      }
      return true;
    }
  },
  components: {
    Breadcrumb,
  }
}
</script>
<style scoped lang=scss>
.btn-create-poll {
  float: right;
  margin-top: 20px;
}
</style>