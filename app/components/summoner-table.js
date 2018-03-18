import Component from '@ember/component';
import config from 'lolsight/config/environment';
import fetch from 'fetch';

export default Component.extend({
    summoner: null,
    apiVersion: config.riotApiVersion,

    didInsertElement() {
        fetch('http://localhost:3001/summoner?name=Jeremy%20Linguine').then(response => {
            response.json().then(summoner => {
                this.set('summoner', summoner);
            })
        });
    },
});
