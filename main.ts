import { write } from './dreyfus/write.ts';
import * as site from './site/site-map.ts';

const IN_DIR = 'site';
const OUT_DIR = 'public';

write(IN_DIR, OUT_DIR, site);
