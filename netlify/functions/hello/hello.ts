import type { Handler, HandlerEvent, HandlerContext  } from "@netlify/functions";


const handler: Handler = async ( event: HandlerEvent, context: HandlerContext) => {

    console.log('Probando visualizar logs con netlify');
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hola dev',
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
};

export { handler };