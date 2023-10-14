import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import UpdatesCard from '../../components/UpdatesCard/UpdatesCard';
import sliderFilling from '../../configs/database';
import './InitialPage.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ResponseProps {
    title: string
    description: string
    updatedAt: string
}

function InitialPage() {
    const [response, setResponse] = useState<ResponseProps[]>([] as ResponseProps[]);
    const [indexToShow, setIndexToShow] = useState([0, 1]);

    const nextPage = () => {
        setIndexToShow(indexToShow.map(index => index + 1))
    }
    const previousPage = () => {
        setIndexToShow(indexToShow.map(index => index - 1))
    }

    useEffect(() => {
        setResponse(sliderFilling);
    }, [])

    return (
        <>

            <Header />
            <main>
                <h1>Faculdade de Educação Tecnológica do Estado do Rio de Janeiro</h1>
                <p className='initial-course'>Análise e Desenvolvimento de Sistemas</p>

                <section>
                    <div className='initial-text-div'>
                        <p className='initial-txt'>
                            <strong className='initial-subtitle'>Quem somos?</strong>
                            A FAETERJ-Rio, unidade de educação superior mantida pela FAETEC, tem como objetivo formar profissionais qualificados em Análise e Desenvolvimento de Sistemas de Informação, apto a desenvolver aplicações de média e alta complexidade, que exige uma constante atualização para inserção e permanência no mundo do trabalho com consciente da sua responsabilidade na sociedade.
                        </p>
                        <p className='initial-txt'>
                            <strong className='initial-subtitle'>Formas de Ingresso</strong>
                            Seleção pelo processo <strong>SISU</strong> segundo critérios do <strong>MEC</strong> e nota no <strong>ENEM</strong>
                        </p>
                    </div>
                    <aside>
                        {indexToShow[0] !== 0 ?
                            <button
                                onClick={previousPage}
                                className='paginator'>
                                <ChevronLeft color='white' />
                            </button> :
                            <div style={{ width: 60 }} />}
                        {
                            response.map((update, index) => {
                                if (indexToShow.includes(index)) {
                                    return (
                                        <UpdatesCard
                                            key={index}
                                            title={update.title}
                                            description={update.description}
                                            updatedAt={update.updatedAt}
                                        />
                                    )
                                }
                            })
                        }
                        {
                            indexToShow[1] !== response.length - 1 ?
                                <button
                                    className='paginator'
                                    onClick={nextPage}>
                                    <ChevronRight color='white' />
                                </button> : <div style={{ width: 60 }} />}
                    </aside>
                </section>
            </main>

        </>
    );
}

export default InitialPage;
