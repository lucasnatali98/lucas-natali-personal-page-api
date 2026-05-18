import {Router, Request, Response }from 'express';


const tagRoutes = Router()

tagRoutes.get('/tag', (req: Request, res: Response) => {
    res.status(200).send({
        message: ''
    })
})


tagRoutes.get('/tag/:id', (req:Request, res: Response) => {
    res.status(200).send({
        message: ''
    })
})

tagRoutes.post('/tag', (req: Request, res:Response) => {
    res.status(200).send({
        message: ''
    })
})

export {tagRoutes};