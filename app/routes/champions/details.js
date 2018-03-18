import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        let champion;
        let champions = this.store.peekAll('champion');
        champions = champions.filterBy('key', params.key);
        if (champions.length) {
            champion = champions[0]
        }
        else {
            champion = this.store.findRecord('champion', params.key)
        }
        return {
            champion
        }
    }
});
