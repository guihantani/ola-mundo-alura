import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Guilherme Hantani, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}                
                />

                <img
                    className={styles.minhaFoto}
                    src={'https://github.com/guihantani.png'}
                    alt='Foto do Guilherme'
                />
            </div>
        </div>
    )
}