class InteractionRepository {

    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    add(interaction) {
        let comment = this.connection('comments').insert({

        });
        let rate = this.connection('rates').insert({

        });
    }
}

module.exports = InteractionRepository;
