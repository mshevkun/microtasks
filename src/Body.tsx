type BodyPropsType = { titleForBody: string };

export function Body({ titleForBody }: BodyPropsType) {
  return (
    <main>
      <p>{titleForBody}</p>
    </main>
  );
}
