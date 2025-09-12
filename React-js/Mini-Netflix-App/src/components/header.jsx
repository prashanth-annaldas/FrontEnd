import Input from '../components/Input';

const Header = ({ movieName,  setMovieName, handleFetching }) => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className='searchDiv'>
            <Input movieName={ movieName } setMovieName={ setMovieName } handleFetching={ handleFetching } />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
