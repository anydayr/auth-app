import NotFoundImage from '../assets/not-found.svg';
const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        height: '100vh'
      }}>
      <img src={NotFoundImage} />
    </div>
  );
};
export default NotFoundPage;
