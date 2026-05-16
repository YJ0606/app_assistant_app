import { UploadsService } from "./uploads.service";
export declare class UploadsController {
    private s;
    constructor(s: UploadsService);
    upload(): {
        url: string;
    };
}
