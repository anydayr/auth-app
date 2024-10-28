import { Post } from '../interfaces/placeholder-data';
import { capitalizeFirstLetter } from '../../../../utilities/capitalize-first-letter';
interface ListData {
  id: number;
  description: string;
  title: string;
}

function formatList(originalPosts: Post[]): ListData[] {
  return originalPosts.map((original) => ({
    id: original.id,
    description: capitalizeFirstLetter(original.body), // asignamos 'body' a 'description'
    title: capitalizeFirstLetter(original.title),
    actions: ''
  }));
}
export { formatList };
