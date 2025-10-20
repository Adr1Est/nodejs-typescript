import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// Se utiliza abstract para que no se puedan crear instancias de esa clase
// Cualquier clase que implemente una clase abstracta, debe contener lo que defina.
export abstract class LogDataSource{
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}

// En este caso, toda clase que implemente LogDataSource deben tener saveLog y getLogs