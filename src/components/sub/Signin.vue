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
      const userInfo = {
        socialId: profile.Eea,
        email: profile.U3,
        name: profile.ig,
        network: 'google'
      }
      this.updateUserInfo(userInfo);

      this.axios.post('/auth', {
        network: 'google',
        socialToken: accessToken
      }).then(res => {
        if (res.status == 200) {
          const serverToken = res.data.token;
          this.updateServerToken(serverToken);

          const userId = res.data.data._id;
          this.updateUserInfo({ userId });
        }
      }).catch(err => {
        this.pino.err(err);
      })
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    ...mapMutations(['updateSocialToken', 'updateServerToken', 'updateUserInfo'])
  }
}
</script>

<style scoped lang=scss>
.g-signin-button {
  border: 1px solid #fff;
  padding: 4px 8px;
  cursor: pointer;
}
</style>
