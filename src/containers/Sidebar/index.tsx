import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from './../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gabriel Viana</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        @gabrilgvbf
      </Paragrafo>
      <Descricao tipo="principal" fontSize={14}>
        Full Stack python
      </Descricao>
      <BotaoTema>Trocar tema </BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
