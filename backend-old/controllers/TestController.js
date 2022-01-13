import Controller from './Controller.js';
import TestService from '../services/TestService.js';
import Test from '../models/Test.js';

const testService = new TestService(
    new Test().getInstance()
)

class TestController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new TestController(testService)
