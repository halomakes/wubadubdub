import { Tile } from '../tile';
import { Link } from 'src/app/link';

export class Creation extends Tile {
    routerLink: Array<any>;
    description: string;
    blurb: string;
    links: Array<Link>;
    expanded: boolean;
    tech: Array<string>;
}
