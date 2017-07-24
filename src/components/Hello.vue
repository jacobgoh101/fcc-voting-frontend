<template>
  <div>
    <g-signin-button :params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError">
      Sign in with Google
    </g-signin-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      googleSignInParams: {
        client_id: '28065581468-4rbjg22ltb9n6nd183e9mh92rsuqe3j7.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      const authRes = googleUser.getAuthResponse(true)
      const accessToken = authRes.access_token
      this.updateSocialToken(accessToken)
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    ...mapMutations(['updateSocialToken'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=scss>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
