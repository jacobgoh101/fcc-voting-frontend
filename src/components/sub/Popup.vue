<template>
    <div>
        <mu-popup position="top" :overlay="false" popupClass="popup-top" :open="popup.topPopup">
            {{popup.topPopupMsg}}
        </mu-popup>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['popup'])
    }
}
</script>

<style lang="css">
.popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
}

.popup-left {
    display: flex;
    width: 85%;
    max-width: 375px;
    height: 100%;
    align-items: center;
    padding: 24px;
}

.popup-right {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 375px;
    align-items: center;
    padding: 24px;
}

.popup-bottom {
    width: 100%;
    max-width: 375px;
}
</style>