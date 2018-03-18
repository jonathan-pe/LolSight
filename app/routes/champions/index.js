import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            champions: this.store.findAll('champion')
        }
    }
});
