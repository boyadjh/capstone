import Controller from './Controller.js';
import ProfileService from '../services/ProfileService.js';
import Profile from '../models/Profile.js';

const profileService = new ProfileService(
    new Profile().getInstance()
)

class ProfileController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new ProfileController(profileService)
