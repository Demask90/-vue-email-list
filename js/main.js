Vue.config.devtools = true;

// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue ({
    el:"#app",
    data: {
        contacts: 10,
        arrayMailTmp:[],
        arrayMail:[],
    },
    mounted() {
        for(let i = 0; i < this.contacts; i++){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result)=>{
                    let mail = (i + 1) + " - " + result.data.response;
                    console.log(mail)
                    this.arrayMailTmp.push(mail);
                    if(this.arrayMailTmp.length == this.contacts){
                        this.arrayMail = this.arrayMailTmp
                    }       
                })
        }

    }
})
