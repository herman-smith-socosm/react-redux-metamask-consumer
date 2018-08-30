import config from 'react-global-configuration';

import { 
    MAIN_NETWORK,
    ROPSTEN_NETWORK,
    MORDEN_NETWORK,
    PRIVATE_NETWORK,
} from './networks';

config.set({ 
  CONTRACT_ADDRESS: '',
  DESIRED_NETWORK: PRIVATE_NETWORK
});