"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**

export const ipdetectorMiddleware = async (req: Request, resp: Response, next: NextFunction) : Promise<void> => {
    try {
        let ip = req.ip;
        let ips = req.ips;
        let path = req.path;
        if(!ip){
            next();
        }
        let result = await client.ipDetector.upsert({
            create: {
                ip: ip!,
                ips: ips.join(", "),
                path: path
            },
            update: {
                ips: ips.join(", "),
                path: path
            },
            where: {
                ip: ip!
            }
        });
        next();
    } catch(err){
        next(err);
    }
};

*/ 
//# sourceMappingURL=ipdetector_middleware.js.map