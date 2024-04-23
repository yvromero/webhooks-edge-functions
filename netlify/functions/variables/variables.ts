import type { Handler, HandlerEvent, HandlerContext  } from "@netlify/functions";
import { envs } from '../../../src/config/envs';


const handler: Handler = async ( event: HandlerEvent, context: HandlerContext) => {

    const myImportantVariable = envs.MY_IMPORTANT_VARIABLE;

    if ( !myImportantVariable ) {
        throw 'Missing MY_IMPORTANT_VARIABLE';
    }

    console.log('Probando visualizar logs con variables desde netlify');

    return {
        statusCode: 200,
        body: JSON.stringify({
            myImportantVariable,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
};

export { handler };