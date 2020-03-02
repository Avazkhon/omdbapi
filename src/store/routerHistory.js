import { createBrowserHistory, createMemoryHistory } from 'history'
import { inBrowser } from 'utils';

const basename = (inBrowser() && window.regionBaseName) || '';

const history = inBrowser()
  ? createBrowserHistory({ basename, })
  : createMemoryHistory({ basename, });

console.log('routerHistory is: ', inBrowser() ? 'createBrowserHistory' : 'createMemoryHistory');

export default history;
