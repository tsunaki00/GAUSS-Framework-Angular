import { environment } from '../../../environments/environment';


export abstract class AbstractService {

  public API_URL = '';

  public constructor() {
    const {path} = environment.api; 
    this.API_URL = `${path}`;
  }

}

