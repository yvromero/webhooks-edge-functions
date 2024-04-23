import 'dotenv/config';
import {get} from 'env-var';


export const envs = {

    MY_IMPORTANT_VARIABLE: get('MY_IMPORTANT_VARIABLE').required().asString(),
    DISCORD_WEBHOOK_URL: get('DISCORD_WEBHOOK_URL').required().asString(),
}