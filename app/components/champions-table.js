import Component from '@ember/component';
import config from 'lolsight/config/environment';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),

    champions: null,
    filteredChampions: null,
    filter: null,
    apiVersion: config.riotApiVersion,

    didInsertElement() {
        this.set('champions', this.get('model.champions'));
        this.set('filteredChampions', this.get('champions'));
    },

    actions: {
        champDetails(key) {
            this.get('router').transitionTo('champions.details', key);
        }
    }
});
