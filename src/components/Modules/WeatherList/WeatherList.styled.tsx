import styled from 'styled-components'
import { Card } from 'antd'
import Text from '../../UI-Kits/Text'
import { FONT_SIZE } from '../../UI-Kits/constants'

export const StyledWeatherList = styled.div`
  display: grid;
  grid-auto-flow: column;
`
export const StyledWeatherListItem = styled(Card)`
  .ant-card-body {
    display: grid;
    grid-gap: 10px;
  }
`

export const StyledDayTitle = styled(Text)`
  font-size: ${FONT_SIZE.large};
`

export const StyledImageLR = styled.img``