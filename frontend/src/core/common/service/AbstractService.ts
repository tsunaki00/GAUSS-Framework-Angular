import { environment } from '../../../environments/environment';


export abstract class AbstractService {

  protected API_URL = '';
  constructor() {
    const {protocol, host, port} = environment.api; 
    this.API_URL = `${protocol}://${host}:${port}`;      
  }

}

