// Eyebrow + H2 pair used at the top of most sections.
export default function SectionHeading({
  id,
  eyebrow,
  title,
  dark = false,
  size = 44,
}: {
  id: string;
  eyebrow: string;
  title: string;
  dark?: boolean;
  size?: 40 | 42 | 44 | 46;
}) {
  const sizes = {
    40: "text-[40px] leading-[1.1]",
    42: "text-[42px] leading-[1.1]",
    44: "text-[44px] leading-[1.1]",
    46: "text-[46px] leading-[1.08]",
  };

  return (
    <>
      <p className={`m-0 text-[13px] font-bold tracking-[0.12em] uppercase ${dark ? "text-gold-on-dark" : "text-gold-text"}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`m-0 font-serif font-semibold ${sizes[size]} tab:text-[34px] phone:text-[30px] ${
          dark ? "text-white" : "text-forest-deep"
        }`}
      >
        {title}
      </h2>
    </>
  );
}
