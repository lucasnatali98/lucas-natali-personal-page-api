import {Router, Request, Response } from 'express'


const categoryRoutes = Router()

categoryRoutes.get('/category', (req: Request, res: Response) => {
    res.status(200).send({
        message: ''
    })
})

categoryRoutes.post('/category', (req: Request, res:Response) => {
    res.status(200).send({
        message: ''
    })
})

categoryRoutes.get('/category/:id', (req: Request, res: Response) => {
    res.status(200).send({
        message: ''
    })
})


export {categoryRoutes}