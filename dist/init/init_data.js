"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitData = void 0;
const db_1 = require("../web/db");
class InitData {
    static db = db_1.dbClient;
    static async insertRoles() {
        try {
            let result = await InitData.db.user.createManyAndReturn({
                data: [{
                        username: "taufiq.mukhtar",
                        password: "taufiq1729"
                    }]
            });
        }
        catch (err) {
            console.info(err);
        }
    }
}
exports.InitData = InitData;
//# sourceMappingURL=init_data.js.map