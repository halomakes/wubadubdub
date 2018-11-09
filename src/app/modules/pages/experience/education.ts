import { Experience } from './experience';
import { Course } from './course';

export class Education extends Experience {
    public classes: Array<Course>;
}
