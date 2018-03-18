import Component from '@ember/component';
import config from 'lolsight/config/environment';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),

    champions: null,
    apiVersion: config.riotApiVersion,

    didInsertElement() {
        fetch('http://localhost:3001/champions').then(response => {
            response.json().then(champions => {
                this.set('champions', champions);
            })
        });
    },

    actions: {
        champDetails(id) {
            this.get('router').transitionTo('champions.details', id);
        }
    }
});
