import styles from './SobreMim.module.css'

import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'

export default function SobreMim() {
    return (
        <PostModelo
            FotoCapa={fotoCapa}
            titulo='Sobre Mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Guilherme!
            </h3>

            <img
                src={'https://github.com/guihantani.png'}
                alt='Foto do Guilherme'
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sem ut faucibus ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec mattis, purus nec eleifend vulputate, lorem urna lobortis libero, eu congue sem lectus eget erat. Vivamus tincidunt tristique lorem, et varius metus pharetra eu. In facilisis ac leo eget malesuada. Maecenas semper iaculis rhoncus. Nulla vitae tempor ligula.
            </p>
            <p className={styles.paragrafo}>
                Nullam nec urna eros. Duis sed tincidunt nibh, quis suscipit leo. Sed ut ligula ut ex feugiat maximus ut eu dui. Donec hendrerit a felis eu condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sollicitudin metus pharetra quam sagittis faucibus. Aliquam eget massa egestas, commodo mauris non, aliquet lacus. Curabitur commodo nunc non dolor pharetra, vitae interdum ipsum ullamcorper. Phasellus laoreet, dolor ac condimentum convallis, quam sapien eleifend nisl, non commodo erat lacus eget sem. Nam dictum, justo sit amet porta pellentesque, arcu elit consectetur felis, vitae tincidunt lectus urna at erat. Nam ullamcorper vestibulum ligula, ac pretium odio iaculis ac. Nullam id pretium eros. Donec placerat luctus felis eget semper. Cras sit amet mauris at arcu iaculis vulputate molestie quis tellus.
            </p>
            <p className={styles.paragrafo}>
                Vestibulum quis rhoncus nisi. Proin suscipit semper ipsum, et volutpat enim dapibus at. Morbi laoreet felis velit, id interdum nunc lacinia at. Phasellus molestie nulla metus, porttitor tempus risus vehicula et. Maecenas nec augue id ante sagittis eleifend sed et diam. Praesent sagittis laoreet posuere. Sed semper mauris metus, elementum dictum nunc rhoncus non. Suspendisse sed diam orci. Quisque vel egestas mauris. Duis venenatis mollis gravida. Praesent tempus purus eu urna mattis, id facilisis ligula varius. Duis eget placerat lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p className={styles.paragrafo}>
                Integer quis magna sit amet justo tempor pretium nec eu sem. Pellentesque ac vulputate sapien, sed accumsan mi. Praesent consequat turpis dolor, non scelerisque justo consectetur et. Pellentesque non sem nisl. Duis condimentum dolor vestibulum pulvinar dignissim. Curabitur facilisis sagittis vestibulum. Praesent eget nibh nec sapien faucibus porta sed sed ligula. Curabitur scelerisque, eros at fringilla varius, libero sapien pulvinar augue, id congue nisl massa eget orci. Integer dapibus orci at dictum iaculis. Phasellus mollis ex ultricies arcu pellentesque posuere. Nam id mauris mollis, cursus erat ac, sollicitudin tellus. Duis placerat risus blandit viverra lacinia. Nulla finibus urna sapien, at fringilla urna sollicitudin quis. Nulla sodales ut nisi eu aliquet.
            </p>
            <p className={styles.paragrafo}>
                Sed sed consequat risus, nec condimentum justo. Suspendisse rutrum dapibus orci. Integer vel fringilla nisi. Donec dapibus venenatis bibendum. Praesent fringilla consequat sodales. Maecenas lacus velit, suscipit pulvinar magna sit amet, aliquam placerat mi. Sed congue quis sem nec porttitor. Aliquam mattis mattis risus, a congue metus condimentum nec. In egestas orci eget feugiat mollis. Donec sed porttitor metus, nec congue est.
            </p>
            <p className={styles.paragrafo}>
                Morbi nec odio quis metus vehicula consequat mattis ut felis. Morbi tristique sagittis metus nec pellentesque. In tincidunt ligula sed dui imperdiet imperdiet. Donec eu arcu eget lorem sagittis facilisis. Phasellus vel convallis massa, efficitur condimentum lorem. Pellentesque in sodales nisi, et ornare sapien. Pellentesque scelerisque, mauris ac accumsan lobortis, est magna ultricies nulla, ut posuere leo purus non dui. Donec porta velit diam, in fringilla arcu placerat quis. Mauris rhoncus ultrices maximus. Quisque at vehicula massa. Morbi lacus ante, consequat quis purus eu, tincidunt volutpat ante. Donec in mollis ante. Phasellus ac ex in leo lobortis elementum vel non metus.
            </p>
        </PostModelo>
    )
}