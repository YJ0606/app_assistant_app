import { LoggerService as NestLoggerService } from "@nestjs/common";
export declare class LoggerService implements NestLoggerService {
    log(msg: string): void;
    error(msg: string, trace?: string): void;
    warn(msg: string): void;
    debug(msg: string): void;
    verbose(msg: string): void;
}
