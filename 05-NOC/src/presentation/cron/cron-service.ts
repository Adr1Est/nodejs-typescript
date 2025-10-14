import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {

  static createJob(cronTime: CronTime, onTick: OnTick){

    const job = new CronJob(cronTime, onTick);
    //   '*/3 * * * * *', // cronTime
    //   () => {
    //     const date = new Date();
    //     console.log(`3 seconds ${date}`);
    //   }, // onTick
    //   null, // onComplete
    //   true, // start
    //   'America/Los_Angeles' // timeZone
    // ); Sin patrón adaptador

    job.start();

    return job;
  }
}