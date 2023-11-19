import Link from "next/link";

export default function LinkButton({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <>
      <Link href={url}>
        <span>{title}</span>
      </Link>
    </>
  );
}
