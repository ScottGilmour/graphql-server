module.exports = {
    Query: {
        breweries: async (_, __, { dataSources }) => dataSources.breweryAPI.getAllBreweries(),
        brewery: async (_, args, { dataSources }) => dataSources.breweryAPI.getBreweryByID(args.id),
        breweriesByName: async (_, args, { dataSources }) => dataSources.breweryAPI.getBreweriesByName(args.name),
        breweriesByState: async (_, args, { dataSources }) => dataSources.breweryAPI.getBreweriesByState(args.state),
        breweriesByTag: async (_, args, { dataSources }) => dataSources.breweryAPI.getBreweriesByTag(args.tag),
    }
}