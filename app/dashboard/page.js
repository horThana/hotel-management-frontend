import { Footer } from '../component/Footer';
import Navbar from '../component/Navbar';
import styles from './dashboard.module.css';

const home = () => {
    return (
        <div className="">
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.da}>
                    <img
                        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="rounded"
                    />
                    <img
                        src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="rounded"
                    />
                    <img
                        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="rounded"
                    />
                    <img
                        src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="rounded"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default home;
