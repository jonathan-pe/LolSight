import Component from '@ember/component';
import fetch from 'fetch';
import config from 'lolsight/config/environment';

export default Component.extend({
    recentMatches: null,
    apiVersion: config.riotApiVersion,

    didInsertElement() {
        //HARDCODED ACCOUNT ID
        fetch('http://localhost:3001/matches?accountId=210608727').then(response => {
            response.json().then(recentMatches => {
                this.set('recentMatches', recentMatches);
            })
        });
    },
});
