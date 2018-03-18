import Component from '@ember/component';
import config from 'lolsight/config/environment';
export default Component.extend({
    champions: null,
    apiVersion: config.riotApiVersion,

    didInsertElement() {
        this.set('champion', this.get('model.champion'));

    },
});
