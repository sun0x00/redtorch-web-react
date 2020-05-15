import * as React from 'react';
import { observer } from 'mobx-react';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { createTheme, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { mergeStyleSets, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { Redirect } from 'react-router-dom';
const theme: ITheme = createTheme({
  fonts: {
    medium: {
      fontFamily: 'Monaco, Menlo, Consolas',
      fontSize: '30px'
    }
  }
});

const styles = mergeStyleSets({
  root: {
    background: DefaultPalette.themeTertiary
  },

  item: {
    color: DefaultPalette.white,
    background: DefaultPalette.themePrimary,
    padding: 5
  }
});

const NotFoundPage = observer((synchronizedHistory:any) => {
  console.log(synchronizedHistory)
  const { history } =  synchronizedHistory;
  console.log(history)

  if (history.location.pathname === '/') {
    return (<Redirect to={{
      pathname: '/management/gateway',
    }} />)
  }

  return (
    <Stack gap={12}>
      <Separator theme={theme}>404 所请求的页面不存在或已被删除!</Separator>
      <Stack.Item align="center" className={styles.item}>
        <PrimaryButton
          allowDisabledFocus={true}
          disabled={false}
          checked={false}
          text="返回主页"
          onClick={() => { history.push('/management/gateway') }}
        />
      </Stack.Item>
    </Stack>
  )
})

export default NotFoundPage