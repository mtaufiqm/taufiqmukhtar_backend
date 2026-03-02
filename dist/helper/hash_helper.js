"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashHelper = void 0;
const crypto_1 = require("crypto");
class HashHelper {
    static async hash(password) {
        return (0, crypto_1.hash)("sha256", password);
    }
}
exports.HashHelper = HashHelper;
//# sourceMappingURL=hash_helper.js.map