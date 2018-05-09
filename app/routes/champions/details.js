import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
    champion: null,

    model(params) {
        fetch(`http://localhost:3001/champions/${params.id}`).then(response => {
            response.json().then(champion => {
                this.set('champion', champion);
                console.log(champion);
                return {
                    champion
                }
            })
        });
    }
});
