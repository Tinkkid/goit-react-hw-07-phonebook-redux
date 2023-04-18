import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ThreeDots
        height="60"
        width="60"
        radius="7"
        color="#ffeba7"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      ;
    </div>
  );
};
