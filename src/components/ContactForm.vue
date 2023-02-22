<template>
  <div class="contactform">
    <div class="col animate-fade-in">
        <div class="text">
            <h1>Contact Form</h1>
            <p>Feel free to reach us via the contact form! Or get in contact with us directly by the following links.</p>
            <div class="contacts">
                <p>
                    Email: <a href="mailto:info@inyourdaylight.com">info@inyourdaylight.com</a>
                </p>
                <p>
                    Phone: <a href="tel:6473587767">(647)-358-7767</a>
                </p>
            </div>
    </div>
    </div>
    <div class="col">
   <div class="contact-form animate-fade-in animate-delay-250">
    <form>
        <div class="row">
            <label for="name"><p>Name</p></label>
            <input ref="name" required placeholder="eg. John Smith"/>
        </div>
        <div class="row">
            <label for="email"><p>Email Address</p></label>
            <input ref="email" required placeholder="eg. johnsmith@email.com"/>
        </div>
        <div class="row">
            <label for="phone"><p>Phone Number</p></label>
            <input ref="phone" required placeholder="eg: 9051234567"/>
        </div>
        <div class="row">
            <label for="message"><p>Message</p></label>
            <textarea ref="message" required placeholder="eg. I have an inquiry about your services..." rows="10" cols="70"></textarea>
        </div>
  
        <div class="row">
           <a class="cta">
            <input type="submit" class="submit"/>
           </a>
        </div>
    </form>
   </div>
    </div>
  </div>
</template>

<script>
import industries from "../industries.js";

export default {
  name: 'ContactForm',
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
.contactform {
    padding: 20px;
    @media screen and (min-width: $mobileup) {
        padding: 20px 10%;
    }
}
.text {
    text-align: left;
    max-width: 600px;
    margin: auto;
    @media screen and (max-width: $mobiledown) {
        margin-bottom: 40px;
    }
    @media screen and (min-width: $mobileup) {
        margin-right: 20px;
    }
}
.contact-form {
    // background: $lightgrey;
    border: 1px solid $gold;
    max-width: 600px;
    margin: auto;
    padding: 40px;
    border-radius: 20px;
    input:not(.submit, .radio), textarea {
        outline: none;
        border: none;
        padding: 10px 0 5px;
        display: inline-block;
        vertical-align: top;
        width: calc(75% - 10px);
        background: none;
        border-bottom: 1px solid white;
        color: white;
    }
    textarea {
        resize: none;
        border: 1px solid $gold;
        padding: 10px;
        width: calc(75% - 20px);
        border-radius: 10px;
        font-family: $body;
    }

    .cta {
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
        margin-bottom: 20px;
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
        padding: 10px 0 5px;
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
.col {
    display: inline-block;
    vertical-align: top;
    @media screen and (min-width: $mobileup) {
        width: 50%;
    }
    @media screen and (max-width: $mobiledown) {
        width: 100%;
        display: block;
    }
}
.contacts {
    width: 100%;
    margin-top: 60px;
    td {
        @media screen and (min-width: $mobileup) {
            width: 50%;
        }
        @media screen and (max-width: $mobiledown) {
            width: 100%;
            display: block;
        }
    }
}
h1 {
    margin-bottom: 40px;
}
</style>
