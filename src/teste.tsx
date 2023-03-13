import styled from 'styled-components'

type Botaoprops = {
  principal: boolean
  fontSize?: string
}
const Botao = styled.button<Botaoprops>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`

background-color red;
color:#fff;
span{
  text-decoration:line-through
}
`

function Teste() {
  return (
    <>
      {' '}
      <Botao principal>CLIQUE AQUI</Botao>
      <Botao fontSize="12px" principal={false}>
        CANCELAR
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
