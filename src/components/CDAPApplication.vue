<template>
  <div class="cdap-application">
   <div class="text">
        <h1 class="animate-fade-in">CDAP Application</h1>
        <p class="animate-fade-in animate-delay-250">Feel free to fill out the application, to see if you are eligible for the CDAP Program!</p>
   </div>
   <div class="application-form animate-fade-in animate-delay-250">
    <form @submit.prevent="submitForm" ref="form">
        <div class="row">
            <label for="name"><p>Name</p></label>
            <input ref="name" required placeholder="eg. John Smith"/>
        </div>
        <div class="row">
            <label for="company_name"><p>Company Name</p></label>
            <input ref="company_name" required placeholder="eg. In Your Daylight"/>
        </div>
        <div class="row">
            <label for="business"><p>Business Industry</p></label>
            <div name="business" class="dropdown closed">
                <input required 
                name="business"
                ref="business"
                class="dropdown-input"
                :value="activeIndustry"
                @input="doIndustrySearch" 
                @change="handleChange" 
                placeholder="Please select your occupational field."/>
                    <div class="arrow">▼</div>
                    <div class="selection">
                        <p class="option industry" v-for="(item, i) in industries.list" :key="i">{{ item }}</p>
                    </div>
            </div>
        </div>
        <div class="row">
            <label for="phone"><p>Phone Number</p></label>
            <input ref="phone" required placeholder="eg: 9051234567"/>
        </div>
        <div class="row">
            <label for="email"><p>Email Address</p></label>
            <input ref="email" required placeholder="eg. johnsmith@email.com"/>
        </div>
        <div class="row">
            <label for="app"><p>Have you previously started a CDAP application?</p></label>
            <div name="app" class="radiobox">
                <!-- class="dropdown closed"> -->
                <!-- <span class="input">{{application}}</span>
                <div class="arrow">▼</div>
                <div class="selection">
                    <p class="option application">No</p>
                    <p class="option application">Yes</p>
                </div> -->
                <input type="radio" ref="app" checked name="app" class="radio" value="No"/> No
                <input type="radio" ref="app" name="app" class="radio" value="Yes"/> Yes
            </div>
        </div>
        <div class="row">
            <label for="refer"><p>Who Referred You?</p></label>
            <input ref="refer" required placeholder="eg. Some Company Inc."/>
        </div>
        <div class="row">
           <a class="cta">
            <input type="submit" class="submit" value="Submit"/>
           </a>
        </div>
    </form>
   </div>
  </div>
</template>

<script>
import industries from "../industries.js";
import Email from "../smtp.js";
export default {
  name: 'CDAPApplication',
  props: {
    clickEvents: {
        type: Object,
        default: () => {}
    }
  },
  watch: {
    clickEvents: {
        handler(clickEvent) {
            switch(clickEvent.target.className) {
                case "dropdown closed": {
                    clickEvent.target.getElementsByClassName("selection")[0].style.maxHeight = '400px';
                    clickEvent.target.className = "dropdown open";
                    clickEvent.target.getElementsByClassName("arrow")[0].className = "arrow up";
                    break;
                }
                case "dropdown open": {
                    clickEvent.target.getElementsByClassName("selection")[0].style.maxHeight = '0px';
                    clickEvent.target.className = "dropdown closed";
                    clickEvent.target.getElementsByClassName("arrow")[0].className = "arrow";
                    break;
                }
                case "option industry": {
                    clickEvent.target.parentElement.style.maxHeight = '0px';
                    clickEvent.target.parentElement.parentElement.className = "dropdown closed";
                    this.activeIndustry = clickEvent.target.innerHTML;
                    clickEvent.target.parentElement.parentElement.getElementsByClassName("arrow")[0].className = "arrow";
                    break;
                }
                case "option application": {
                    clickEvent.target.parentElement.style.maxHeight = '0px';
                    clickEvent.target.parentElement.parentElement.className = "dropdown closed";
                    this.application = clickEvent.target.innerHTML;
                    break;
                }
            }
            
        }
    }
  },
  methods: {
    submitForm() {
        let data = `
            Name: ${this.$refs.name.value}<br/>
            Company Name: ${this.$refs.company_name.value}<br/>
            Business: ${this.$refs.business.value}<br/>
            Phone: ${this.$refs.phone.value}<br/>
            Email: ${this.$refs.email.value}<br/>
            CDAP Application previously started: ${this.$refs.app.value}<br/>
            Referred by: ${this.$refs.refer.value}<br/>
        `;
        let obj = {
            SecureToken : "bb206819-c4dc-44fc-b279-0eddc0804cf4",
            To : 'grace.h@inyourdaylight.com',
            From : "inyourdaylight123@gmail.com",
            Subject : "CDAP Application from Website",
            Body : data
        }
        Email.send(obj).then((res) => {
            console.log(res);
            this.$refs.form.reset();
        })
    },
    doIndustrySearch(e) {
        // Show dropdown
        e.target.parentElement.parentElement.getElementsByClassName("selection")[0].style.maxHeight = '400px';
        e.target.parentElement.className = "dropdown open";
        e.target.parentElement.getElementsByClassName("arrow")[0].className = "arrow up";
        // Current value is what user is typing in
        this.activeIndustry = e.target.value;
        // If not results found, display that in the dropdown
        if ([...industries.list].filter(i => i.toLowerCase().includes(e.target.value.toLowerCase())).length === 0) {
            this.industries = {
                list: ['No results found.']
            };
            return;
        }
        this.industries = {
            list: [...industries.list].filter(i => i.toLowerCase().includes(this.activeIndustry.toLowerCase()))
        };
    },
    handleChange(clickEvent) {
        if ([...industries.list].indexOf(this.activeIndustry) < 0) {
            this.activeIndustry = null;
            this.industries = industries;
        }
        clickEvent.target.parentElement.getElementsByClassName("selection")[0].style.maxHeight = '0px';
        clickEvent.target.parentElement.className = "dropdown closed";
        clickEvent.target.parentElement.getElementsByClassName("arrow")[0].className = "arrow";
    }
  },
  data() {
    return {
        industries: industries,
        activeIndustry: null,
        application: "No"
    }
  },
  mounted() {
    this.activeIndustry = this.industries.list[0];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
.cdap-application {
    padding: 20px;
}
.text {
    text-align: center;
}
.application-form {
    // background: $lightgrey;
    border: 1px solid $gold;
    max-width: 600px;
    margin: 40px auto auto;
    padding: 40px;
    @media screen and (max-width: $mobiledown) {
        padding: 20px;
    }
    border-radius: 20px;
    input:not(.submit, .radio) {
        outline: none;
        border: none;
        border-radius: 0;
        padding: 10px 0 0;
        display: inline-block;
        vertical-align: middle;
        width: calc(75% - 10px);
        background: none;
        border-bottom: 1px solid white;
        color: white;
        padding-bottom: 5px;
    }

    .cta {
            text-transform: capitalize;
        &:hover {
            .submit {
                color: $darkblue;
                transition: all .5s ease;
            }
        }
        background: white;
    }
    .submit {
        cursor: pointer;
        background: none;
        border: none;
        color: $turquoise;
        font-weight: 700;
        font-size: 20px;
        font-family: $body;
        position: relative;
        z-index: 2;
        transition: all .5s ease;
    }

    p {
        margin-bottom: 0;
    }
    .row:not(:last-child) {
        margin-bottom: 30px;
    }
    .row:last-child {
        text-align: center;
        margin-top: 40px;
    }
    h3 {
            margin: 0;
        }
    label {
        display: inline-block;
        vertical-align: middle;
        width: calc(25% - 20px);
        padding-right: 10px;
        color: white;
    }
    .radiobox {
        width:  calc(75% - 10px);
        display: inline-block;
        .radio {
            cursor: pointer;
            display: inline-block;
            border: none;
            width: 20px;
            height: 20px;
            vertical-align: bottom;
            &:last-child {
                margin-left: 20px;
            }
        }
    }
    .dropdown {
        cursor: pointer;
        // background: lightblue;
         -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 5px;
        border: none;
        border-radius: 10px;
        width: calc(75% - 10px);
        display: inline-block;
        background: white;
        position: relative;
        input {
            color: $darkblue;
            padding: 5px;
            border-radius: 10px;
            transition: all .5s ease;
            color: $darkblue;
            font-size: 14px;
            
            &:focus,  &:hover {
                background: lightgrey;
                transition: all .5s ease;
            }
        }
        .input {
            padding: 0;
            color: $darkblue;
            padding: 5px;
            border-radius: 10px;
            transition: all .5s ease;
            color: $darkblue;
            font-size: 14px;
            display: block;
            pointer-events: none;
        }
        p {
            color: $darkblue;
            font-size: 14px;
        }
        .arrow {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: black;
            pointer-events: none;
            transition: all .25s ease;
        }
        .up {
            transition: all .25s ease;
            transform: translateY(-50%) rotate(180deg);
        }
        .selection {
            position: absolute;
            background: lightgrey;
            width: calc(100% - 20px);
            left: 0;
            z-index: 3;
            max-height: 0px;
            overflow-y: scroll;
            transition: all .5s ease;
            p {
                transition: all .25s ease;
                padding: 5px 10px;
                &:hover {
                    background: white;
                    transition: all .25s ease;
                }
            }
        }
        option {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;       /* Remove default arrow */
            background: black;
            color: white;
        }
    }
}
</style>
