import { AbstractService } from './abstract-service';
class CharacterService extends AbstractService {
    constructor() {
        super('https://kitsu.io/api/edge/characters?page[limit]=10');
    }

    filterCharactersByName = (nameToFilter, pageOffset) => {
        const params = [];
        nameToFilter && params.push({name: 'filter[name]', value: nameToFilter});
        pageOffset && params.push({name: 'page[offset]', value: pageOffset});

        return this.get(params);
    }
}

export default new CharacterService();