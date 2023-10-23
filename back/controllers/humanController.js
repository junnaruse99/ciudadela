const apolloClient = require('../config/apolloClient');
const gql = require('graphql-tag');

class HumanController {
    static async getHumanCharacters(page) {

        const response = await apolloClient.query({
            query: gql`
                query {
                    characters(page: ${page}, filter: { species: "Human" }) {
                        info {
                            pages
                        }
                        results {
                            id
                            name
                            status
                            type
                            gender
                            origin {name}
                            location {name}
                            image
                        }
                    }
                }
            `
        });

        return {
            pages: response.data.characters.info.pages,
            items: response.data.characters.results
        };
    }
}

module.exports = HumanController;