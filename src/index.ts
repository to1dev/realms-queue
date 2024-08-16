import { WorkerEntrypoint } from 'cloudflare:workers';
import { realmHandler } from './realm';

export class QueueWorker extends WorkerEntrypoint<Env> {
    async sendQueue(id: string) {
        await this.env.MY_QUEUE.send({
            id: `${id}`,
        });
    }
}

export default {
    async queue(batch, env): Promise<void> {
        for (let message of batch.messages) {
            await realmHandler(message, env);
        }
    },
} satisfies ExportedHandler<Env, Error>;
