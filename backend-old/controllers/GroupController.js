import Controller from './Controller.js';
import GroupService from '../services/GroupService.js';
import Group from '../models/Group.js';

const groupService = new GroupService(
    new Group().getInstance()
)

class GroupController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new GroupController(groupService)
