import { createSite } from './utilities/createSite';
import { SiteDefinition } from './SiteDefinition/index';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

createSite(SiteDefinition, [NotFoundPage, HomePage]);
