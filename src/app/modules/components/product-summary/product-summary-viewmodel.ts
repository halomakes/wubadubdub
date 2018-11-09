import { Tile } from '../../pages/tile';
import { Link } from 'src/app/link';

export class ProductSummaryViewModel extends Tile {
    routerLink: Array<any>;
    description: string;
    blurb: string;
    links: Array<Link>;
    expanded: boolean;
    tech: Array<string>;
}
