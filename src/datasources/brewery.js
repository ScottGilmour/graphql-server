const {RESTDataSource} = require('apollo-datasource-rest');

class BreweryAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.openbrewerydb.org/breweries';
    }

    async getAllBreweries() {
        const response = await this.get('/');
        return Array.isArray(response) ? response.map(brewery => this.reducer(brewery)) : [];
    }

    async getBreweryByID(id) {
        const response = await this.get('/' + id);
        return response ? this.reducer(response) : undefined;
    }

    async getBreweriesByName(name) {
        const response = await this.get('?by_name=' + name);
        return Array.isArray(response) ? response.map(brewery => this.reducer(brewery)) : [];
    }

    async getBreweriesByState(state) {
        const response = await this.get('?by_state=' + state);
        return Array.isArray(response) ? response.map(brewery => this.reducer(brewery)) : [];
    }

    async getBreweriesByTag(tag) {
        const response = await this.get('?by_tag=' + tag);
        return Array.isArray(response) ? response.map(brewery => this.reducer(brewery)) : [];
    }

    reducer(brewery) {
        return {
            id: brewery.id,
            name: brewery.name,
            type: brewery.brewery_type,
            street: brewery.street,
            city: brewery.city,
            state: brewery.state,
            postal: brewery.postal,
            country: brewery.country,
            longitude: brewery.longitude,
            latitude: brewery.latitude,
            phone: brewery.phone,
            url: brewery.website_url,
            tags: brewery.tags
        };
    }
}

module.exports = BreweryAPI;