export class UserService {
    constructor(database) {
        this.db = database;
    }

    getUserById(id) {
        return this.db.findUser(id);
    }

    createUser(user) {
        return this.db.saveUser(user);
    }
}

export const mockDatabase = {
    users: [],

    findUser(id) {
        return this.users.find((user) => user.id === id) || null;
    },

    saveUser(user) {
        this.users.push(user);
        return user;
    }
}