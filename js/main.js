Vue.config.devtools = true;

// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue ({
    el:"#app",
    data: {
        Mails: [],
    },
    Mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {

                this.Mails.push(result.data.response);
             
            });    
        }
    }

})