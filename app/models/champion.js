import DS from 'ember-data';
import { computed } from '@ember/object';
const { attr } = DS;

export default DS.Model.extend({
    name: attr('string'),
    key: attr('string'),
    title: attr('string'),
    fullName: computed('name', 'title', function() {
        const name = this.get('name');
        const title = this.get('title');

        return `${name} ${title}`;
    })
});
