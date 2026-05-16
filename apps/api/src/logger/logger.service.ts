import { Injectable, LoggerService as NestLoggerService } from "@nestjs/common";
@Injectable()
export class LoggerService implements NestLoggerService {
  log(msg: string) { console.log(`[LOG] ${msg}`); }
  error(msg: string, trace?: string) { console.error(`[ERR] ${msg}`, trace); }
  warn(msg: string) { console.warn(`[WARN] ${msg}`); }
  debug(msg: string) { console.debug(`[DEBUG] ${msg}`); }
  verbose(msg: string) { console.log(`[VERBOSE] ${msg}`); }
}
