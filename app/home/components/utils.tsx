export const Seperator = () => (
  <hr className="w-50 mx-auto my-10 md:w-[95%] md:text-gray-300 md:min-h-5 md:my-20" />
);

export const SectionTitle = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <>
      <h2 className="text-right font-semibold text-gray-800/90 md:text-center text-2xl my-3">
        {title}
      </h2>
      <p className="text-center mb-10">{desc}</p>
    </>
  );
};
