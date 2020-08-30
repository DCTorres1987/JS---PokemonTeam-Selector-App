class Team {
    constructor(name) {
        this.name = name;
        AppContainer.teams.push(this);
    }
}