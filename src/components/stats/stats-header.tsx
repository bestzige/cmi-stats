type StatsHeaderProps = {
  text?: string;
};

const StatsHeader = ({ text = "Profile" }: StatsHeaderProps) => {
  return (
    <div
      className='text-center w-auto bg-cover bg-center bg-no-repeat mb-10'
      style={{
        backgroundImage: 'url("/assets/images/stats-header.webp")',
      }}
    >
      <h1 className='px-0 py-20 text-3xl font-bold text-white uppercase tracking-wider'>
        {text}
      </h1>
    </div>
  );
};

export default StatsHeader;
