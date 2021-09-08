<template>
  <div id="age-gate-overlay" style="display:none">
    <div id="age-gate-cont" aria-label="Age Verification Screen," role="dialog">
      <div class="ag-logo">
        <logo role="img" focusable="false" aria-label="Woodbridge wines logo"/>
      </div>
      <div class="ag-body">
        <div id="legalMessage" class="ag-text">
          <p>
            You must be of legal drinking age in your country to enter this site.
            <br />Please enter your date of birth below and press "Enter".
          </p>
        </div>
        <div class="ag-mobile-text-cont">
          <p id="legalMessageMobile">
            Are you
            <span id="ag-age-span"></span> years or older?
          </p>
        </div>
        <div class="ag-date-input">
          <div id="ag-mm-input-cont" class="input-cont">
            <label for="ag-mm-input" id="mm-label">Month</label>
            <input id="ag-mm-input" name="month" size="1" maxlength="2" placeholder="MM" aria-labelledby="legalMessage mm-label" />
          </div>
          <div id="ag-dd-input-cont" class="input-cont">
            <label for="ag-dd-input" id="dd-label">Day</label>
            <input id="ag-dd-input" name="day" size="1" maxlength="2" placeholder="DD" aria-labelledby="dd-label"/>
          </div>
          <div id="ag-yy-input-cont" class="input-cont">
            <label for="ag-yy-input" id="yyyy-label">Year</label>
            <input id="ag-yy-input" name="year" size="2" maxlength="4" placeholder="YYYY" aria-labelledby="yyyy-label"/>
          </div>
        </div>
        <div class="ag-submit-btn-cont">
           <button type="button" id="ag-submit-button" tabindex="0">Enter</button>
        </div>
        <div class="ag-mobile-btn-cont">
          <label id="yesbuttonLabel" style="display:none;">Yes</label>
          <button type="button" id="ag-mm-input-mobile-yes" class="ag-mobile-button" value="yes" aria-labelledby="legalMessageMobile yesbuttonLabel">Yes</button>
          <label id="nobuttonLabel" style="display:none;">No</label>
          <button type="button" id="ag-mm-input-mobile-no" class="ag-mobile-button" value="no" aria-labelledby="nobuttonLabel">No</button>
        </div>
        <div class="ag-sep-text">
          <p>OR</p>
        </div>

        <!-- START JANRAIN SOCIAL SIGN IN --->

        <a
          href="#"
          id="captureSignInLink"
          @click.prevent="facebookLogin"
          onclick="janrain.engage.signin.triggerFlow('facebook')"
        >Verify age via Facebook</a>
        <a
          href="#"
          id="captureSignOutLink"
          style="display:none"
          onclick="janrain.capture.ui.endCaptureSession()"
        >Sign Out</a>

        <div style="display:none;" id="signIn">
          <div class="capture_header">
            <span class="main-heading">Sign Up / Sign In</span>
          </div>
          <div class="capture_signin">
            <h2>With your existing account from...</h2>
            {* loginWidget *}
            <br />
          </div>
        </div>

        <div style="display:none;" id="returnSocial">
          <div class="capture_header">
            <span class="main-heading">Sign In</span>
          </div>
          <div class="capture_signin">
            <h2>Welcome back, {* welcomeName *}!</h2>
            {* loginWidget *}
            <div class="capture_centerText switchLink">
              <a href="#" data-cancelcapturereturnexperience="true">Use another account</a>
            </div>
          </div>
        </div>

        <div style="display:none;" id="accountDeactivated">
          <div class="capture_header">
            <span class="main-heading">Deactivated Account</span>
          </div>
          <div class="content_wrapper">
            <p>Your account has been deactivated.</p>
          </div>
        </div>

        <div style="display:none;" id="socialRegistration">
          <h2>A birthdate is required. Please provide your birthdate.</h2>
          {* #socialRegistrationForm *}
          {* birthday *}
          <div class="capture_footer">
            <div class="capture_left">{* backButton *}</div>
            <div class="capture_right">
              <input
                id="socialRegistrationButton"
                value="Continue"
                type="submit"
                class="capture_btn capture_primary"
              />
            </div>
          </div>
          {* /socialRegistrationForm *}
        </div>

        <div style="display:none;" id="mergeAccounts">
          {* mergeAccounts {"custom": true} *}
          <div
            id="capture_mergeAccounts_mergeAccounts_mergeOptionsContainer"
            class="capture_mergeAccounts_mergeOptionsContainer"
          >
            <div class="capture_header">
              <div class="capture_icon_col">{| rendered_current_photo |}</div>
              <div class="capture_displayName_col">
                {| current_displayName |}
                <br />
                {| current_emailAddress |}
              </div>
              <span
                class="capture_mergeProvider janrain-provider-icon-24 janrain-provider-icon-{| current_provider_lowerCase |}"
              ></span>
            </div>
            <div class="capture_dashed">
              <div class="capture_mergeCol capture_centerText capture_left">
                <p class="capture_bigText">
                  {| foundExistingAccountText |}
                  <b>{| current_emailAddress |}</b>.
                </p>
                <div class="capture_hover">
                  <div class="capture_popup_container">
                    <span class="capture_popup-arrow"></span>
                    {| moreInfoHoverText |}
                  </div>
                  {| moreInfoText |}
                </div>
              </div>
              <div class="capture_mergeCol capture_mergeExisting_col capture_right">
                <div class="capture_shadow capture_backgroundColor capture_border">
                  {| rendered_existing_provider_photo |}
                  <div class="capture_displayName_col">
                    {| existing_displayName |}
                    <br />
                    {| existing_provider_emailAddress |}
                  </div>
                  <span
                    class="capture_mergeProvider janrain-provider-icon-16 janrain-provider-icon-{| existing_provider_lowerCase |}"
                  ></span>
                  <div
                    class="capture_centerText capture_smallText"
                  >Created {| existing_createdDate |} at {| existing_siteName |}</div>
                </div>
              </div>
            </div>
            <div class="capture_centerText">
              <h3>Connect with your {| existing_siteName |} account?</h3>
            </div>
            <div class="capture_footer">
              <div class="capture_left">{* backButton *}</div>
              <div class="capture_right">{| connect_button |}</div>
            </div>
          </div>
        </div>

        <!-- END JANRAIN SOCIAL SIGN IN --->

        <div class="ag-sm-text">
          <p>
            Woodbridge Wines by Robert Mondavi supports the Century Councils fight against underage drinking and drunk driving. To learn more, visit their website at:
           <a href="https://responsibility.org/" target="_blank" aria-label="century council website">www.centurycouncil.org</a>
          </p>
          <p>We will not share your information or post to your Facebook wall without your permission.</p>
          <p>Please enjoy our wines responsibly. &copy; {{ new Date().getFullYear()}} Woodbridge Wines by Robert Mondavi, Acampo, CA</p>
          <p>
            Our
            <router-link to="/privacy-policy">Privacy Policy</router-link>and
            <router-link to="/terms">Terms &amp; Conditions</router-link>have changed. By using this website, you agree to the Privacy Policy and Terms and Conditions of use.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debug from 'debug'
import Logo from '@/assets/logo2.svg'

let log = debug('component:AgeGate')
export default {
  name: 'AgeGate',
  props: [],
  data () {
    return {}
  },
  beforeCreate: function () {},
  mounted: function () {
    log('Mounted')
    this.trapModalFocus()
  },
  methods: {
    facebookLogin () {
      this.$emit('checkCookie')
    },

    trapModalFocus() {
      console.log("In Trap")
      setTimeout(() => {
      var identNum = document.getElementById("ag-mm-input");
      var identNumMobile = document.getElementById("ag-mm-input-mobile-yes");         
        identNumMobile.focus();
        identNum.focus();
      }, 1000);
      console.log('Trapping focus')
      var focusableEls = document.querySelectorAll('a[href]:not([disabled])')    
      var firstFocusableElMobile = document.getElementById('ag-mm-input-mobile-yes')
      var firstFocusableEl = document.getElementById('ag-mm-input')
      var lastFocusableEl = focusableEls[focusableEls.length - 2]
      window.addEventListener('keydown', function (e) {
      var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB
        if (!isTabPressed) {
          return
        }
        if (e.shiftKey) {
          /* shift + tab */ if (document.activeElement === firstFocusableEl || document.activeElement === firstFocusableElMobile) {
            lastFocusableEl.focus()
            e.preventDefault()
          }
        } /* tab */ else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus()
            firstFocusableElMobile.focus()
            e.preventDefault()
          }
        }
      })
    }
  },
  components: {
    Logo,
  },
}
</script>

<style scoped lang="scss">
@import "../../styles/_variables";
@import "../../styles/_mixins";
// #age-gate-cont .ag-logo img {
//   width: 148px;
//   height: 100px;
//   margin: 0 auto -20px;
//   display: flex;
// }
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #4d4a3a;
  opacity: .9; /* Firefox */
}

#age-gate-overlay * {
  font-family: "balboa", "Times New Roman", Times, serif;
  font-weight: 100;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/*  all inner element borders */
#ag-cou-input-cont .date-sel-cont-view,
#ag-cou-input-cont .date-sel-cont-view:before,
.date-sel-cont-view.sel-list-expand,
#ag-submit-button,
.ag-mobile-button,
#ag-cou-btn {
  border: 1px solid #5e5b4b  !important;
}
/* all font colors */
#age-gate-cont,
#ag-cou-btn,
.date-sel-item {
  color: #fff;
}
/* background color */
#age-gate-cont,
#ag-country-sel,
.date-sel-cont-view {
  background-color: #fff;
}
/* button images */
#ag-cou-input-cont .date-sel-cont-view:before {
  //background-image: url(../../images/arrow-down-thick.svg);
}
@media (max-width: 1080px) {
  #ag-cou-input-cont .date-sel-cont-view::before {
    //background-image: url(../../images/arrow-down.svg);
  }
}
#ag-dd-input {
  border-right: 2px solid #4d4a3a !important;
  border-left: 2px solid #4d4a3a  !important;
}
/* main form container styling */
#age-gate-cont {
  @include center-block;
  max-width: 750px;
  display: table;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  right: 50%;
  transform: translateY(-50%) translateX(50%);
  background-color: $brandTan;
  outline: 1px solid #9e7e4a;
  outline-offset: -10px;
  color: #4d4a3a;
}
 #age-gate-overlay {
     width: 100%;
     height: 100vh;
     background-color: rgba(249, 244, 224,0.8);
     position: fixed;
     opacity: 0;
     transition: 0.3s;
     display: none;
     top: 0;
     left: 0;
     z-index: 99999999;
 }
/* #age-gate-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px 10px;
  display: none;

  @media #{$mobile} {
    margin: 0 auto;
    width: 85%;
  }
} */
#age-gate-overlay.show-gate {
  opacity: 1;
}
#ag-submit-button,
.ag-mobile-button,
#ag-cou-btn {
  width: 165px;
  font-size: 20px;
  padding: 10px 30px 5px 30px;
  margin: 0 10px;
  display: table;
  cursor: pointer;
  text-transform: uppercase;
  float: left;
  background: transparent;
  outline: none;
   color: #5e5b4b;
  &:focus{
    color: black;
    background:$brandGoldLight ;
    outline: 0.1em solid black ;
    border: 0.1em solid white !important;
  }
}
#age-gate-cont .ag-logo {
  width: 50%;
  margin: 40px auto 20px;
  min-width: 260px;
  text-align: center;
}
#age-gate-cont .ag-logo img {
  width: 100%;
  height: auto;
}
.ag-text p {
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
  padding: 0 30px;
  color: #4d4a3a;
}
#age-gate-cont .input-cont {
  display: inline-block;
  position: relative;
}
#age-gate-cont .ag-date-input span {
  font-size: 54px;
  font-family: "balboa", "Times New Roman", Times, serif;
  font-weight: 600;
}
.ag-mobile-btn-cont,
.ag-cou-btn-cont,
#age-gate-cont .ag-date-input,
.ag-sep-text,
.ag-submit-btn-cont {
  margin: 20px auto;
  display: table;
}
.ag-sep-text p {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #4d4a3a;
}
.ag-mobile-text-cont {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 0 20px;
  text-transform: uppercase;
  box-sizing: border-box;
}
.ag-sm-text {
  padding: 20px 35px;
  margin-bottom: 10px;
}
.ag-sm-text p {
  font-size: 11px;
  text-align: center;
  line-height: 12px;
  margin: 5px 0;
  color: #4d4a3a;
}
.ag-sm-text a {
  color: #981f22;
  font-size: 11px;
  text-decoration: underline;
  text-transform: inherit;
}
.ag-mobile-text-cont,
.ag-mobile-btn-cont {
  display: none;
}
ul.date-sel-list {
  list-style-type: none;
  font-size: 48px;
  width: auto;
  margin: 0 0 0 0 !important;
  position: relative;
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);
  transition: 0.3s;
  padding: 0 !important;
}
.date-sel-cont-view.sel-list-expand .date-sel-list {
  margin: 100px 0 0 0 !important;
  transition: 0s;
}
.date-sel-item {
  font-size: 42px !important;
  width: 80px;
  display: table;
  cursor: pointer;
  visibility: hidden;
  text-align: center;
}

#ag-cou-input-cont .date-sel-item {
  margin: 0 auto;
  font-size: 22px !important;
  line-height: 36px;
  display: block;
  width: 100%;
  text-align: left;
  padding-left: 20px;
}
.date-sel-cont-view.sel-list-expand .date-sel-list .date-sel-item,
.date-sel-item.date-selected {
  visibility: visible;
}
.date-sel-cont {
  width: 82px;
  height: 64px;
  position: relative;
}
#ag-yy-input-cont .date-sel-item,
#ag-yy-input-cont .date-sel-cont {
  width: 132px;
}
#ag-yy-input-cont .date-sel-cont-view {
  width: 85% !important;
}
#ag-cou-input-cont {
  margin-top: 20px;
}
#ag-cou-input-cont .date-sel-cont,
#age-gate-cont #ag-cou-input-cont.input-cont {
  width: 100%;
  height: 62px;
}
#ag-cou-input-cont ul.date-sel-list,
.ag-body {
  position: relative;
}
.date-sel-cont-view {
  height: 64px;
  position: absolute;
  top: 0px;
  overflow: hidden;
  transition: 0.3s;
  border: 1px solid rgba(0, 0, 0, 0);
}
#ag-cou-input-cont .date-sel-cont-view {
  height: 39px;
  position: absolute;
  width: 80%;
  box-sizing: border-box;
  float: left;
  margin-left: 10%;
  cursor: pointer;
}
#ag-cou-input-cont .date-sel-cont-view:before {
  content: "";
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  display: block;
  height: 40px;
  float: right;
  position: relative;
  top: -1px;
  right: -1px;
  transition: 0.3s;
}
#ag-cou-input-cont .date-sel-cont-view:hover:before {
  background-color: rgba(255, 255, 255, 0.3);
}
.date-sel-cont-view.sel-list-expand {
  border-radius: 3px;
  height: 270px !important;
  top: -100px;
}

#ag-cou-input-cont .date-sel-cont-view.sel-list-expand {
  left: 0;
}
#ag-cou-input-cont .date-sel-cont-view.sel-list-expand:before {
  top: -80px;
}

#ag-country-sel {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.ui-draggable-dragging .date-sel-item,
.date-selected {
  pointer-events: none;
}
.sel-list-expand .date-selected {
  pointer-events: auto;
}
.input-cont:focus {
  outline: 0;
}
.input-cont {
  & > label {
    display: block;
    text-align: center;
    color: #5e5b4b;
    margin-bottom: -4px;
  }
}
#age-gate-cont .input-cont input {
  width: 84px;
  background: none;
  border: none;
  text-align: center;
  padding: 0;
  font-size: 40px;
  font-family: "adobe-caslon-pro", "Times New Roman", Times, serif;
  font-weight: 100;
}

#age-gate-cont .ag-date-input input#ag-yy-input {
  width: 130px;
}
.ag-notice-cont {
  position: absolute;
  bottom: 3.5%;
  right: 50%;
  -webkit-transform: translateX(50%);
  -moz-transform: translateX(50%);
  -ms-transform: translateX(50%);
  -o-transform: translateX(50%);
  transform: translateX(50%);
}

.ag-notice-checkbox {
  display: inline;
}
.ag-notice-cont p {
  display: inline;
  color: #fff;
  margin-left: 3px;
  font-size: 15px;
}
.ag-cookie-popup {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: #fff;
  width: 100%;
  padding: 30px 20px;
  text-align: center;
}
.ag-cookie-popup button {
  width: 60%;
  font-size: 24px;
  margin: 15px auto;
  display: table;
  float: none;
}
.ag-cookie-popup p + button {
  margin-top: 45px;
}

/* social media button */
.loginBtn {
  box-sizing: border-box;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em auto;
  padding: 0 15px 0 15px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #fff;
  display: table;
  text-transform: uppercase;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
}
/* Facebook */
.loginBtn--facebook {
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354c8c;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5b7bd5;
  background-image: linear-gradient(#5b7bd5, #4864b1);
}

@-moz-document url-prefix() {
  ::-moz-focus-inner {
    border: none;
  }
  .input-cont:-moz-focusring {
    color: transparent;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
}

@media (max-width: 1023px) {
  .ag-date-input,
  .ag-submit-btn-cont,
  .ag-text {
    display: none !important;
  }
  .ag-mobile-text-cont,
  .ag-mobile-btn-cont {
    display: table;
  }
  .ag-mobile-text-cont {
    font-size: 24px;
  }
  #ag-cou-input-cont .date-sel-item {
    font-size: 20px !important;
    line-height: 42px;
    white-space: nowrap;
  }
  #ag-cou-input-cont .date-sel-cont-view {
    padding: 5px 0 45px 10px;
    width: 90%;
    margin-left: 5%;
  }
  #ag-cou-input-cont .date-sel-cont-view::before {
    width: 50px;
    height: 70px;
    top: -16px;
  }
  #age-gate-cont {
    max-width: none;
    width: 95vw;
    height: 52vh;
    top: 40%;
  }
  #ag-cou-input-cont .date-sel-cont,
  #age-gate-cont #ag-cou-input-cont.input-cont {
    height: 62px;
    width: 100%;
  }
  #ag-submit-button,
  .ag-mobile-button,
  #ag-cou-btn {
    width: 48%;
    margin: 0 1%;
    font-size: 28px;
    padding: 10px 50px 0px 50px;
  }
  #ag-cou-btn {
    width: 100%;
  }
  .ag-mobile-btn-cont,
  .ag-cou-btn-cont,
  #age-gate-cont .ag-date-input,
  .ag-sep-text,
  .ag-submit-btn-cont {
    margin: 5px auto 20px;
  }
  .date-sel-cont-view.sel-list-expand .date-sel-list {
    margin: 20vh 0 0 0 !important;
    transition: 0s;
  }
  .date-sel-cont-view.sel-list-expand {
    border-radius: 3px;
    height: 50vh !important;
    top: -20vh;
  }
  #ag-cou-input-cont .date-sel-cont-view.sel-list-expand:before {
    top: -120px;
  }
  .loginBtn {
    padding: 5px 25px 5px 25px;
    font-size: 16px;
  }
}

#age-gate-cont{
  &:focus{
    border: 0.1em solid black;
  }
}
</style>
