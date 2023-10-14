import Header from "../../components/Header/Header";
import ementaryTable from '../../assets/Ementario.svg';

function Ementary() {
    return (
        <>
            <Header />
            <main>
                <h1>Ementário</h1>
                <img src={ementaryTable} alt="tabela ementário" />
            </main>
        </>);
}

export default Ementary;