import Footer from './Footer';
import Header from './Header';

function bag(){
    return  <>
                <Header />
                <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                    </div>
                    <div className="bag-summary">
                    </div>

                </div>
                </main>
                <Footer />
            </>
}

export default bag;