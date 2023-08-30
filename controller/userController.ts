// import {Controller, Post} from 'routing-controllers';
import express from 'express';
import bodyParser from 'body-parser';

import { regularUser } from '../model/regularUser';

// @Controller()
class userController {

    // @Post('/register')
    public registerUser(request: Request, response: Response) {
        const {email , password} = request.body;
        const user = new regularUser(email, password, [], false);
        
    }
}

export {}