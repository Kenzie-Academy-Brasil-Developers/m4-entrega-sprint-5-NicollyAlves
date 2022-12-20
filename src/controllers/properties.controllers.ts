import listPropertiesService from "../services/properties/listProperties.service"

const listPropertiesController = async (req: Request, res: Response) => {
    const properties = await listPropertiesService()
    res.json(properties)
}

export { listPropertiesController }