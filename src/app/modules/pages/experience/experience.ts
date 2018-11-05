import { Link } from './link';

export class Experience {
    public title: string;
    public date: Date;
    public location: string;
    public description: string;
    public links: Array<Link>;
    public images: Array<string>;
}
