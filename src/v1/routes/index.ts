import { Router } from "express";
import apicache from "apicache";
import { 
    createOneRecord, 
    deleteOneRecord, 
    getAllRecord, 
    getOneRecord, 
    updateOneRecord 
} from "../../controllers/record.controller";

const router: Router = Router();
const cache = apicache.middleware;

// Endpoint /api/v1/records
router.get('/', cache("1 minutes"), getAllRecord);
router.get('/:id', getOneRecord);
router.post('/', createOneRecord);
router.patch('/:id', updateOneRecord);
router.delete('/:id', deleteOneRecord);

export { router };
