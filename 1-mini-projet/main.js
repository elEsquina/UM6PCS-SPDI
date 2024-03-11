fetch('personnes.json')
.then(response => response.json())
.then(donne => {
    const app = Vue.createApp({
        data() {
            return {
                homme: true,
                femme: true,
                tel: true,
                mef: false,
                taille: 2,
                filtreNom: '',
                personnes: donne
            }
        }
    });
    app.mount('#app');
})