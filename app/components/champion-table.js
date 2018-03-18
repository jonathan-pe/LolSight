import Component from '@ember/component';
import config from 'lolsight/config/environment';
import { inject as service } from '@ember/service';

export default Component.extend({
    champion: null,
    apiVersion: config.riotApiVersion,

    router: service(),

    didInsertElement() {
        //Split URL and find just the champ ID
        const champId = window.location.pathname.split('/')[2];
        fetch(`http://localhost:3001/champions/${champId}`).then(response => {
            response.json().then(champion => {
                this.set('champion', champion);
            })
        });
    },
});
