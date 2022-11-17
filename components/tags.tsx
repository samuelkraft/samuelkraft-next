import slugify from "slugify";
import Link from "./Link";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps): JSX.Element | null => {
  if (!tags?.length) {
    return null;
  }
  return (
    <div className="flex justify-center">
      <ul className="flex gap-6 animated-list">
        {tags.map((tag) => {
          return (
            <li key={tag} className="transition-opacity">
              <Link
                href={`/blog/tag/${slugify(tag, { lower: true })}`}
                underline
              >{`#${tag}`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
