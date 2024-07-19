type HeaderPropsType = { title: string };

export function Header({ title }: HeaderPropsType) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
