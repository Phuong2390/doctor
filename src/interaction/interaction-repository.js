class InteractionRepository {

    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Interaction} interaction
     */
    add(interaction) {
        let comment = this.connection('comments').insert({
            hospital_id: interaction.getCommenter().getHospital().getId(),
            hospital_name: interaction.getCommenter().getHospital().getName(),
            user_id: interaction.getCommenter().getUser().getId(),
            user_name: interaction.getCommenter().getUser().getUserName(),
            content: interaction.getCommenter().getContent(),
            time: new Date().toLocaleString()
        });

        let rate = this.connection('rates').insert({
            hospital_id: interaction.getRaters().getHospital().getId(),
            hospital_name: interaction.getRaters().getHospital().getName(),
            user_id: interaction.getRaters().getUser().getId(),
            user_name: interaction.getRaters().getUser().getUserName(),
            score: interaction.getRaters().getScore()

        });

        return Promise.all([comment, rate]);
    }

    edit(interaction) {
        let comment = this.connection('comments').update({
            hospital_id: interaction.getCommenter().getHospital().getId(),
            hospital_name: interaction.getCommenter().getHospital().getName(),
            user_id: interaction.getCommenter().getUser().getId(),
            user_name: interaction.getCommenter().getUser().getUserName(),
            content: interaction.getCommenter().getContent(),
            time: new Date().toLocaleString()
        }).where({id: interaction.getCommenter().getId()});

        let rate = this.connection('rates').update({
            hospital_id: interaction.getRaters().getHospital().getId(),
            hospital_name: interaction.getRaters().getHospital().getName(),
            user_id: interaction.getRaters().getUser().getId(),
            user_name: interaction.getRaters().getUser().getUserName(),
            score: interaction.getRaters().getScore()

        }).where({id: interaction.getRaters().getId()});

        return Promise.all([comment, rate]);
    }
}

module.exports = InteractionRepository;
